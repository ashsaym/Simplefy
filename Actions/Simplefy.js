var editor = ace.edit("editor");
editor.find('needle',{
    backwards: false,
    wrap: false,
    caseSensitive: false,
    wholeWord: false,
    regExp: false
});
editor.findNext();
editor.findPrevious();
ace.require("ace/ext/language_tools");
editor.setOptions({
    enableBasicAutocompletion: true,
    enableEmmet: true,
    enableLiveAutocompletion: true
});

//cdnjs.cloudflare.com/ajax/libs/ace/1.1.3/ace.js
var theme='ace/theme/tomorrow';
var mode='ace/mode/scss';
var editor= ace.edit('editor');
    editor.setTheme(theme);
    editor.getSession().setMode(mode);
    // editor.renderer.setShowGutter(false);

$('#ace-mode').on('change',function(){
  editor.getSession().setMode('ace/mode/' +$(this).val().toLowerCase());
});
$('#ace-theme').on('change',function(){
  editor.setTheme('ace/theme/' +$(this).val().toLowerCase());
});
