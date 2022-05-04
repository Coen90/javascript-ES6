{
  align : "center",
  header : "-",
  renderer : {
      type : CustomerButton,
      text : "수정",
      valueName: ["autMstIdx"],
      clazz : ["button", "xsmall"],
      event : function (e) {
          $.ajax({
              url : "/manage/auth-info",
              method : "GET",
              headers : {
                  "isAjax" : true,
                  "Accept" : "application/json;charset=UTF-8",
                  "Content-Type" : "application/json;charset=UTF-8",
              },
              data: {
                  autMstIdx: $(this).data("autmstidx"),
              },
              async: false,
              success: function(data) {
                  var $authModifyTemplate = $("#authModifyTemplate");
                  $.ajax({
                      url: "/manage/auth-list-form",
                      type: "GET",
                      headers : {
                          "isAjax" : true,
                          "Accept" : "application/json;charset=UTF-8",
                          "Content-Type" : "application/json;charset=UTF-8",
                      },
                      async: false,
                      beforeSend : function(xhr){
                          xhr.setRequestHeader($.resources.csrf.headerName, $.resources.csrf.token);
                      },
                      success: function (basicData) {
                          config.arr = basicData;
                      },
                  })
                  config.info = data;
                  $.modal.html(e, {
                      title : "메뉴 수정"
                      , size : "800x800"
                      , text : $authModifyTemplate.tmpl(config)
                      , buttonSubmit : true
                      , buttonCancel : true
                      , labelSubmit : "수정"
                      , labelCancel : "닫기"
                      , closeOnSubmit : false
                      , progress: false
                      , onComplete: function(base) {
                          var $authFrm = $("#authFrm")
                          var validator = $authFrm.validate({
                              rules: {
                                  autMstNm: {
                                      required: true,
                                  },
                                  autMstUseYn: {
                                      required: true,
                                  },
                                  admMnuIdx: {
                                      required: true,
                                  },
                              },
                          });
                          checkboxEvent();
                      }
                      , onSubmit : function (base) {
                          var $authFrm = $("#authFrm");
                          if($authFrm.valid()) {
                              $.notify.confirm("저장하시겠습니까?", function (confirm) {
                                  if(confirm) {
                                      // true
                                      $.ajax({
                                          url: "/manage/auth-modify", 
                                          data: JSON.stringify($authFrm.serializeObject()), 
                                          type: "POST", 
                                          headers : {
                                              "isAjax" : true,
                                              "Accept" : "application/json;charset=UTF-8",
                                              "Content-Type" : "application/json;charset=UTF-8"
                                          },
                                          beforeSend : function(xhr){
                                              xhr.setRequestHeader($.resources.csrf.headerName, $.resources.csrf.token);
                                          },
                                          success: function() {
                                              $.notify.success("저장되었습니다.", 3000);
                                              requestData($.common.getSearchParam("page", 1));
                                              $.modal.close();
                                          },
                                          error: function() {
                                              $.notify.error("실패하였습니다. 확인 후 다시 시도해주세요.", 1000);
                                          }
                                      });
                                  }
                              });
                          }
                      }
                  });
              },
          });
      },
  },
},

=>

{
  align : "center",
  header : "-",
  renderer : {
      type : CustomerButton,
      text : "수정",
      valueName: ["autMstIdx"],
      clazz : ["button", "xsmall"],
      event : function (e) {
          e.preventDefault();
          $.getAjax("/manage/auth-info", { autMstIdx: $(this).data("autmstidx") }, function (data) {
              var $authModifyTemplate = $("#authModifyTemplate");
              config.info = data;
          })
          $.getAjax("/manage/auth-list-form", {}, function(basicData) {
              config.arr = basicData;
          });
          openModalForm(e, {
              title: "메뉴 수정"
              , text: $authModifyTemplate.tmpl(config)
              , submit: function () {
                  $.patchAjax("/manage/auth-modify", $authFrm.serializeObject(), function (data) {
                      $.notify.success(data.message, 2000);
                      requestGridData($.common.getSearchParam("page", 1));
                      $.modal.colse();
                  })
              }
          });
      },
  },
},