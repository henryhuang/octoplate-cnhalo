$(document).ready(function(){
//国际化加载属性文件
       jQuery.i18n.properties({
           name:'lang',
           path:'/javascripts/i18n/properties/',
           mode:'map',
           language:'zh-CN',
           callback: function() {// 加载成功后设置显示内容
                $('#nav_label_blog').html($.i18n.prop('nav_label_blog')); 
                $('#nav_label_archives').html($.i18n.prop('nav_label_archives')); 
                $('#nav_label_about').html($.i18n.prop('nav_label_about'));            
           }
       });
});