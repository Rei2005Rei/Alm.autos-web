
        var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?47106';
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = url;
        var options = {
      "enabled":true,
      "chatButtonSetting":{
          "backgroundColor":"#f87c7c",
          "ctaText":"Contact Us",
          "borderRadius":"25",
          "marginLeft":"0",
          "marginBottom":"50",
          "marginRight":"50",
          "position":"right"
      },
      "brandSetting":{
          "brandName":"ALM Autos",
          "brandSubTitle":"The team typically replies in a few minutes.",
          "brandImg":"https://assets.mofoprod.net/network/images/whatsapp_logo.original.jpg",
          "welcomeText":"Hi there!\nHow can I help you?",
          "backgroundColor":"#0a5f54",
          "ctaText":"Contact",
          "borderRadius":"25",
          "autoShow":false,
          "phoneNumber":"355699999444"
      }
    };
        s.onload = function() {
            CreateWhatsappChatWidget(options);
        };
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);





        
        const btn = document.getElementById('button');

        document.getElementById('form')
         .addEventListener('submit', function(event) {
           event.preventDefault();
        
           btn.value = 'Sending...';
        
           const serviceID = 'default_service';
           const templateID = 'template_ql2jitn';
        
           emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
              btn.value = 'Send';
              alert('Sent!');
            }, (err) => {
              btn.value = 'Send';
              alert(JSON.stringify(err));
            });
        });