  new Vue({
        el: "#yavuz",
        data: {
            title: "Başlık",
            description: "Açıklama"
        },
        methods : {
            merhaba : function(){
                return this.title + this.description
            }
        }
    })