// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args35612 = [];
var len__26996__auto___35615 = arguments.length;
var i__26997__auto___35616 = (0);
while(true){
if((i__26997__auto___35616 < len__26996__auto___35615)){
args35612.push((arguments[i__26997__auto___35616]));

var G__35617 = (i__26997__auto___35616 + (1));
i__26997__auto___35616 = G__35617;
continue;
} else {
}
break;
}

var G__35614 = args35612.length;
switch (G__35614) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35612.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__27003__auto__ = [];
var len__26996__auto___35620 = arguments.length;
var i__26997__auto___35621 = (0);
while(true){
if((i__26997__auto___35621 < len__26996__auto___35620)){
args__27003__auto__.push((arguments[i__26997__auto___35621]));

var G__35622 = (i__26997__auto___35621 + (1));
i__26997__auto___35621 = G__35622;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35619){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35619));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27003__auto__ = [];
var len__26996__auto___35624 = arguments.length;
var i__26997__auto___35625 = (0);
while(true){
if((i__26997__auto___35625 < len__26996__auto___35624)){
args__27003__auto__.push((arguments[i__26997__auto___35625]));

var G__35626 = (i__26997__auto___35625 + (1));
i__26997__auto___35625 = G__35626;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35623){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35623));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__35627 = cljs.core._EQ_;
var expr__35628 = (function (){var or__25888__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e35631){if((e35631 instanceof Error)){
var e = e35631;
return false;
} else {
throw e35631;

}
}})();
if(cljs.core.truth_(or__25888__auto__)){
return or__25888__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__35627.call(null,"true",expr__35628))){
return true;
} else {
if(cljs.core.truth_(pred__35627.call(null,"false",expr__35628))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__35628)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e35633){if((e35633 instanceof Error)){
var e = e35633;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e35633;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35634){
var map__35637 = p__35634;
var map__35637__$1 = ((((!((map__35637 == null)))?((((map__35637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35637.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35637):map__35637);
var message = cljs.core.get.call(null,map__35637__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35637__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25888__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25888__auto__)){
return or__25888__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25876__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25876__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25876__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28093__auto___35799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28093__auto___35799,ch){
return (function (){
var f__28094__auto__ = (function (){var switch__27981__auto__ = ((function (c__28093__auto___35799,ch){
return (function (state_35768){
var state_val_35769 = (state_35768[(1)]);
if((state_val_35769 === (7))){
var inst_35764 = (state_35768[(2)]);
var state_35768__$1 = state_35768;
var statearr_35770_35800 = state_35768__$1;
(statearr_35770_35800[(2)] = inst_35764);

(statearr_35770_35800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (1))){
var state_35768__$1 = state_35768;
var statearr_35771_35801 = state_35768__$1;
(statearr_35771_35801[(2)] = null);

(statearr_35771_35801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (4))){
var inst_35721 = (state_35768[(7)]);
var inst_35721__$1 = (state_35768[(2)]);
var state_35768__$1 = (function (){var statearr_35772 = state_35768;
(statearr_35772[(7)] = inst_35721__$1);

return statearr_35772;
})();
if(cljs.core.truth_(inst_35721__$1)){
var statearr_35773_35802 = state_35768__$1;
(statearr_35773_35802[(1)] = (5));

} else {
var statearr_35774_35803 = state_35768__$1;
(statearr_35774_35803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (15))){
var inst_35728 = (state_35768[(8)]);
var inst_35743 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35728);
var inst_35744 = cljs.core.first.call(null,inst_35743);
var inst_35745 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35744);
var inst_35746 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_35745)].join('');
var inst_35747 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35746);
var state_35768__$1 = state_35768;
var statearr_35775_35804 = state_35768__$1;
(statearr_35775_35804[(2)] = inst_35747);

(statearr_35775_35804[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (13))){
var inst_35752 = (state_35768[(2)]);
var state_35768__$1 = state_35768;
var statearr_35776_35805 = state_35768__$1;
(statearr_35776_35805[(2)] = inst_35752);

(statearr_35776_35805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (6))){
var state_35768__$1 = state_35768;
var statearr_35777_35806 = state_35768__$1;
(statearr_35777_35806[(2)] = null);

(statearr_35777_35806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (17))){
var inst_35750 = (state_35768[(2)]);
var state_35768__$1 = state_35768;
var statearr_35778_35807 = state_35768__$1;
(statearr_35778_35807[(2)] = inst_35750);

(statearr_35778_35807[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (3))){
var inst_35766 = (state_35768[(2)]);
var state_35768__$1 = state_35768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35768__$1,inst_35766);
} else {
if((state_val_35769 === (12))){
var inst_35727 = (state_35768[(9)]);
var inst_35741 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35727,opts);
var state_35768__$1 = state_35768;
if(cljs.core.truth_(inst_35741)){
var statearr_35779_35808 = state_35768__$1;
(statearr_35779_35808[(1)] = (15));

} else {
var statearr_35780_35809 = state_35768__$1;
(statearr_35780_35809[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (2))){
var state_35768__$1 = state_35768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35768__$1,(4),ch);
} else {
if((state_val_35769 === (11))){
var inst_35728 = (state_35768[(8)]);
var inst_35733 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35734 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35728);
var inst_35735 = cljs.core.async.timeout.call(null,(1000));
var inst_35736 = [inst_35734,inst_35735];
var inst_35737 = (new cljs.core.PersistentVector(null,2,(5),inst_35733,inst_35736,null));
var state_35768__$1 = state_35768;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35768__$1,(14),inst_35737);
} else {
if((state_val_35769 === (9))){
var inst_35728 = (state_35768[(8)]);
var inst_35754 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35755 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35728);
var inst_35756 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35755);
var inst_35757 = [cljs.core.str("Not loading: "),cljs.core.str(inst_35756)].join('');
var inst_35758 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35757);
var state_35768__$1 = (function (){var statearr_35781 = state_35768;
(statearr_35781[(10)] = inst_35754);

return statearr_35781;
})();
var statearr_35782_35810 = state_35768__$1;
(statearr_35782_35810[(2)] = inst_35758);

(statearr_35782_35810[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (5))){
var inst_35721 = (state_35768[(7)]);
var inst_35723 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35724 = (new cljs.core.PersistentArrayMap(null,2,inst_35723,null));
var inst_35725 = (new cljs.core.PersistentHashSet(null,inst_35724,null));
var inst_35726 = figwheel.client.focus_msgs.call(null,inst_35725,inst_35721);
var inst_35727 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35726);
var inst_35728 = cljs.core.first.call(null,inst_35726);
var inst_35729 = figwheel.client.autoload_QMARK_.call(null);
var state_35768__$1 = (function (){var statearr_35783 = state_35768;
(statearr_35783[(8)] = inst_35728);

(statearr_35783[(9)] = inst_35727);

return statearr_35783;
})();
if(cljs.core.truth_(inst_35729)){
var statearr_35784_35811 = state_35768__$1;
(statearr_35784_35811[(1)] = (8));

} else {
var statearr_35785_35812 = state_35768__$1;
(statearr_35785_35812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (14))){
var inst_35739 = (state_35768[(2)]);
var state_35768__$1 = state_35768;
var statearr_35786_35813 = state_35768__$1;
(statearr_35786_35813[(2)] = inst_35739);

(statearr_35786_35813[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (16))){
var state_35768__$1 = state_35768;
var statearr_35787_35814 = state_35768__$1;
(statearr_35787_35814[(2)] = null);

(statearr_35787_35814[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (10))){
var inst_35760 = (state_35768[(2)]);
var state_35768__$1 = (function (){var statearr_35788 = state_35768;
(statearr_35788[(11)] = inst_35760);

return statearr_35788;
})();
var statearr_35789_35815 = state_35768__$1;
(statearr_35789_35815[(2)] = null);

(statearr_35789_35815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35769 === (8))){
var inst_35727 = (state_35768[(9)]);
var inst_35731 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35727,opts);
var state_35768__$1 = state_35768;
if(cljs.core.truth_(inst_35731)){
var statearr_35790_35816 = state_35768__$1;
(statearr_35790_35816[(1)] = (11));

} else {
var statearr_35791_35817 = state_35768__$1;
(statearr_35791_35817[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28093__auto___35799,ch))
;
return ((function (switch__27981__auto__,c__28093__auto___35799,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27982__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27982__auto____0 = (function (){
var statearr_35795 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35795[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27982__auto__);

(statearr_35795[(1)] = (1));

return statearr_35795;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27982__auto____1 = (function (state_35768){
while(true){
var ret_value__27983__auto__ = (function (){try{while(true){
var result__27984__auto__ = switch__27981__auto__.call(null,state_35768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27984__auto__;
}
break;
}
}catch (e35796){if((e35796 instanceof Object)){
var ex__27985__auto__ = e35796;
var statearr_35797_35818 = state_35768;
(statearr_35797_35818[(5)] = ex__27985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35819 = state_35768;
state_35768 = G__35819;
continue;
} else {
return ret_value__27983__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27982__auto__ = function(state_35768){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27982__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27982__auto____1.call(this,state_35768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27982__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27982__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27982__auto__;
})()
;})(switch__27981__auto__,c__28093__auto___35799,ch))
})();
var state__28095__auto__ = (function (){var statearr_35798 = f__28094__auto__.call(null);
(statearr_35798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28093__auto___35799);

return statearr_35798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28095__auto__);
});})(c__28093__auto___35799,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35820_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35820_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_35823 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35823){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e35822){if((e35822 instanceof Error)){
var e = e35822;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35823], null));
} else {
var e = e35822;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_35823))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35824){
var map__35833 = p__35824;
var map__35833__$1 = ((((!((map__35833 == null)))?((((map__35833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35833.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35833):map__35833);
var opts = map__35833__$1;
var build_id = cljs.core.get.call(null,map__35833__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35833,map__35833__$1,opts,build_id){
return (function (p__35835){
var vec__35836 = p__35835;
var seq__35837 = cljs.core.seq.call(null,vec__35836);
var first__35838 = cljs.core.first.call(null,seq__35837);
var seq__35837__$1 = cljs.core.next.call(null,seq__35837);
var map__35839 = first__35838;
var map__35839__$1 = ((((!((map__35839 == null)))?((((map__35839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35839.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35839):map__35839);
var msg = map__35839__$1;
var msg_name = cljs.core.get.call(null,map__35839__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35837__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35836,seq__35837,first__35838,seq__35837__$1,map__35839,map__35839__$1,msg,msg_name,_,map__35833,map__35833__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35836,seq__35837,first__35838,seq__35837__$1,map__35839,map__35839__$1,msg,msg_name,_,map__35833,map__35833__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35833,map__35833__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35847){
var vec__35848 = p__35847;
var seq__35849 = cljs.core.seq.call(null,vec__35848);
var first__35850 = cljs.core.first.call(null,seq__35849);
var seq__35849__$1 = cljs.core.next.call(null,seq__35849);
var map__35851 = first__35850;
var map__35851__$1 = ((((!((map__35851 == null)))?((((map__35851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35851.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35851):map__35851);
var msg = map__35851__$1;
var msg_name = cljs.core.get.call(null,map__35851__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35849__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35853){
var map__35865 = p__35853;
var map__35865__$1 = ((((!((map__35865 == null)))?((((map__35865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35865.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35865):map__35865);
var on_compile_warning = cljs.core.get.call(null,map__35865__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35865__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35865,map__35865__$1,on_compile_warning,on_compile_fail){
return (function (p__35867){
var vec__35868 = p__35867;
var seq__35869 = cljs.core.seq.call(null,vec__35868);
var first__35870 = cljs.core.first.call(null,seq__35869);
var seq__35869__$1 = cljs.core.next.call(null,seq__35869);
var map__35871 = first__35870;
var map__35871__$1 = ((((!((map__35871 == null)))?((((map__35871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35871.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35871):map__35871);
var msg = map__35871__$1;
var msg_name = cljs.core.get.call(null,map__35871__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35869__$1;
var pred__35873 = cljs.core._EQ_;
var expr__35874 = msg_name;
if(cljs.core.truth_(pred__35873.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35874))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35873.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35874))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35865,map__35865__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28093__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28094__auto__ = (function (){var switch__27981__auto__ = ((function (c__28093__auto__,msg_hist,msg_names,msg){
return (function (state_36102){
var state_val_36103 = (state_36102[(1)]);
if((state_val_36103 === (7))){
var inst_36022 = (state_36102[(2)]);
var state_36102__$1 = state_36102;
if(cljs.core.truth_(inst_36022)){
var statearr_36104_36154 = state_36102__$1;
(statearr_36104_36154[(1)] = (8));

} else {
var statearr_36105_36155 = state_36102__$1;
(statearr_36105_36155[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (20))){
var inst_36096 = (state_36102[(2)]);
var state_36102__$1 = state_36102;
var statearr_36106_36156 = state_36102__$1;
(statearr_36106_36156[(2)] = inst_36096);

(statearr_36106_36156[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (27))){
var inst_36092 = (state_36102[(2)]);
var state_36102__$1 = state_36102;
var statearr_36107_36157 = state_36102__$1;
(statearr_36107_36157[(2)] = inst_36092);

(statearr_36107_36157[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (1))){
var inst_36015 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36102__$1 = state_36102;
if(cljs.core.truth_(inst_36015)){
var statearr_36108_36158 = state_36102__$1;
(statearr_36108_36158[(1)] = (2));

} else {
var statearr_36109_36159 = state_36102__$1;
(statearr_36109_36159[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (24))){
var inst_36094 = (state_36102[(2)]);
var state_36102__$1 = state_36102;
var statearr_36110_36160 = state_36102__$1;
(statearr_36110_36160[(2)] = inst_36094);

(statearr_36110_36160[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (4))){
var inst_36100 = (state_36102[(2)]);
var state_36102__$1 = state_36102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36102__$1,inst_36100);
} else {
if((state_val_36103 === (15))){
var inst_36098 = (state_36102[(2)]);
var state_36102__$1 = state_36102;
var statearr_36111_36161 = state_36102__$1;
(statearr_36111_36161[(2)] = inst_36098);

(statearr_36111_36161[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (21))){
var inst_36051 = (state_36102[(2)]);
var inst_36052 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36053 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36052);
var state_36102__$1 = (function (){var statearr_36112 = state_36102;
(statearr_36112[(7)] = inst_36051);

return statearr_36112;
})();
var statearr_36113_36162 = state_36102__$1;
(statearr_36113_36162[(2)] = inst_36053);

(statearr_36113_36162[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (31))){
var inst_36081 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36102__$1 = state_36102;
if(cljs.core.truth_(inst_36081)){
var statearr_36114_36163 = state_36102__$1;
(statearr_36114_36163[(1)] = (34));

} else {
var statearr_36115_36164 = state_36102__$1;
(statearr_36115_36164[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (32))){
var inst_36090 = (state_36102[(2)]);
var state_36102__$1 = state_36102;
var statearr_36116_36165 = state_36102__$1;
(statearr_36116_36165[(2)] = inst_36090);

(statearr_36116_36165[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (33))){
var inst_36077 = (state_36102[(2)]);
var inst_36078 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36079 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36078);
var state_36102__$1 = (function (){var statearr_36117 = state_36102;
(statearr_36117[(8)] = inst_36077);

return statearr_36117;
})();
var statearr_36118_36166 = state_36102__$1;
(statearr_36118_36166[(2)] = inst_36079);

(statearr_36118_36166[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (13))){
var inst_36036 = figwheel.client.heads_up.clear.call(null);
var state_36102__$1 = state_36102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36102__$1,(16),inst_36036);
} else {
if((state_val_36103 === (22))){
var inst_36057 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36058 = figwheel.client.heads_up.append_warning_message.call(null,inst_36057);
var state_36102__$1 = state_36102;
var statearr_36119_36167 = state_36102__$1;
(statearr_36119_36167[(2)] = inst_36058);

(statearr_36119_36167[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (36))){
var inst_36088 = (state_36102[(2)]);
var state_36102__$1 = state_36102;
var statearr_36120_36168 = state_36102__$1;
(statearr_36120_36168[(2)] = inst_36088);

(statearr_36120_36168[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (29))){
var inst_36068 = (state_36102[(2)]);
var inst_36069 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36070 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36069);
var state_36102__$1 = (function (){var statearr_36121 = state_36102;
(statearr_36121[(9)] = inst_36068);

return statearr_36121;
})();
var statearr_36122_36169 = state_36102__$1;
(statearr_36122_36169[(2)] = inst_36070);

(statearr_36122_36169[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (6))){
var inst_36017 = (state_36102[(10)]);
var state_36102__$1 = state_36102;
var statearr_36123_36170 = state_36102__$1;
(statearr_36123_36170[(2)] = inst_36017);

(statearr_36123_36170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (28))){
var inst_36064 = (state_36102[(2)]);
var inst_36065 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36066 = figwheel.client.heads_up.display_warning.call(null,inst_36065);
var state_36102__$1 = (function (){var statearr_36124 = state_36102;
(statearr_36124[(11)] = inst_36064);

return statearr_36124;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36102__$1,(29),inst_36066);
} else {
if((state_val_36103 === (25))){
var inst_36062 = figwheel.client.heads_up.clear.call(null);
var state_36102__$1 = state_36102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36102__$1,(28),inst_36062);
} else {
if((state_val_36103 === (34))){
var inst_36083 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36102__$1 = state_36102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36102__$1,(37),inst_36083);
} else {
if((state_val_36103 === (17))){
var inst_36042 = (state_36102[(2)]);
var inst_36043 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36044 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36043);
var state_36102__$1 = (function (){var statearr_36125 = state_36102;
(statearr_36125[(12)] = inst_36042);

return statearr_36125;
})();
var statearr_36126_36171 = state_36102__$1;
(statearr_36126_36171[(2)] = inst_36044);

(statearr_36126_36171[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (3))){
var inst_36034 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36102__$1 = state_36102;
if(cljs.core.truth_(inst_36034)){
var statearr_36127_36172 = state_36102__$1;
(statearr_36127_36172[(1)] = (13));

} else {
var statearr_36128_36173 = state_36102__$1;
(statearr_36128_36173[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (12))){
var inst_36030 = (state_36102[(2)]);
var state_36102__$1 = state_36102;
var statearr_36129_36174 = state_36102__$1;
(statearr_36129_36174[(2)] = inst_36030);

(statearr_36129_36174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (2))){
var inst_36017 = (state_36102[(10)]);
var inst_36017__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36102__$1 = (function (){var statearr_36130 = state_36102;
(statearr_36130[(10)] = inst_36017__$1);

return statearr_36130;
})();
if(cljs.core.truth_(inst_36017__$1)){
var statearr_36131_36175 = state_36102__$1;
(statearr_36131_36175[(1)] = (5));

} else {
var statearr_36132_36176 = state_36102__$1;
(statearr_36132_36176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (23))){
var inst_36060 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36102__$1 = state_36102;
if(cljs.core.truth_(inst_36060)){
var statearr_36133_36177 = state_36102__$1;
(statearr_36133_36177[(1)] = (25));

} else {
var statearr_36134_36178 = state_36102__$1;
(statearr_36134_36178[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (35))){
var state_36102__$1 = state_36102;
var statearr_36135_36179 = state_36102__$1;
(statearr_36135_36179[(2)] = null);

(statearr_36135_36179[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (19))){
var inst_36055 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36102__$1 = state_36102;
if(cljs.core.truth_(inst_36055)){
var statearr_36136_36180 = state_36102__$1;
(statearr_36136_36180[(1)] = (22));

} else {
var statearr_36137_36181 = state_36102__$1;
(statearr_36137_36181[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (11))){
var inst_36026 = (state_36102[(2)]);
var state_36102__$1 = state_36102;
var statearr_36138_36182 = state_36102__$1;
(statearr_36138_36182[(2)] = inst_36026);

(statearr_36138_36182[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (9))){
var inst_36028 = figwheel.client.heads_up.clear.call(null);
var state_36102__$1 = state_36102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36102__$1,(12),inst_36028);
} else {
if((state_val_36103 === (5))){
var inst_36019 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36102__$1 = state_36102;
var statearr_36139_36183 = state_36102__$1;
(statearr_36139_36183[(2)] = inst_36019);

(statearr_36139_36183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (14))){
var inst_36046 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36102__$1 = state_36102;
if(cljs.core.truth_(inst_36046)){
var statearr_36140_36184 = state_36102__$1;
(statearr_36140_36184[(1)] = (18));

} else {
var statearr_36141_36185 = state_36102__$1;
(statearr_36141_36185[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (26))){
var inst_36072 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36102__$1 = state_36102;
if(cljs.core.truth_(inst_36072)){
var statearr_36142_36186 = state_36102__$1;
(statearr_36142_36186[(1)] = (30));

} else {
var statearr_36143_36187 = state_36102__$1;
(statearr_36143_36187[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (16))){
var inst_36038 = (state_36102[(2)]);
var inst_36039 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36040 = figwheel.client.heads_up.display_exception.call(null,inst_36039);
var state_36102__$1 = (function (){var statearr_36144 = state_36102;
(statearr_36144[(13)] = inst_36038);

return statearr_36144;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36102__$1,(17),inst_36040);
} else {
if((state_val_36103 === (30))){
var inst_36074 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36075 = figwheel.client.heads_up.display_warning.call(null,inst_36074);
var state_36102__$1 = state_36102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36102__$1,(33),inst_36075);
} else {
if((state_val_36103 === (10))){
var inst_36032 = (state_36102[(2)]);
var state_36102__$1 = state_36102;
var statearr_36145_36188 = state_36102__$1;
(statearr_36145_36188[(2)] = inst_36032);

(statearr_36145_36188[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (18))){
var inst_36048 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36049 = figwheel.client.heads_up.display_exception.call(null,inst_36048);
var state_36102__$1 = state_36102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36102__$1,(21),inst_36049);
} else {
if((state_val_36103 === (37))){
var inst_36085 = (state_36102[(2)]);
var state_36102__$1 = state_36102;
var statearr_36146_36189 = state_36102__$1;
(statearr_36146_36189[(2)] = inst_36085);

(statearr_36146_36189[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36103 === (8))){
var inst_36024 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36102__$1 = state_36102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36102__$1,(11),inst_36024);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28093__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27981__auto__,c__28093__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27982__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27982__auto____0 = (function (){
var statearr_36150 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36150[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27982__auto__);

(statearr_36150[(1)] = (1));

return statearr_36150;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27982__auto____1 = (function (state_36102){
while(true){
var ret_value__27983__auto__ = (function (){try{while(true){
var result__27984__auto__ = switch__27981__auto__.call(null,state_36102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27984__auto__;
}
break;
}
}catch (e36151){if((e36151 instanceof Object)){
var ex__27985__auto__ = e36151;
var statearr_36152_36190 = state_36102;
(statearr_36152_36190[(5)] = ex__27985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36191 = state_36102;
state_36102 = G__36191;
continue;
} else {
return ret_value__27983__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27982__auto__ = function(state_36102){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27982__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27982__auto____1.call(this,state_36102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27982__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27982__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27982__auto__;
})()
;})(switch__27981__auto__,c__28093__auto__,msg_hist,msg_names,msg))
})();
var state__28095__auto__ = (function (){var statearr_36153 = f__28094__auto__.call(null);
(statearr_36153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28093__auto__);

return statearr_36153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28095__auto__);
});})(c__28093__auto__,msg_hist,msg_names,msg))
);

return c__28093__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28093__auto___36254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28093__auto___36254,ch){
return (function (){
var f__28094__auto__ = (function (){var switch__27981__auto__ = ((function (c__28093__auto___36254,ch){
return (function (state_36237){
var state_val_36238 = (state_36237[(1)]);
if((state_val_36238 === (1))){
var state_36237__$1 = state_36237;
var statearr_36239_36255 = state_36237__$1;
(statearr_36239_36255[(2)] = null);

(statearr_36239_36255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (2))){
var state_36237__$1 = state_36237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36237__$1,(4),ch);
} else {
if((state_val_36238 === (3))){
var inst_36235 = (state_36237[(2)]);
var state_36237__$1 = state_36237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36237__$1,inst_36235);
} else {
if((state_val_36238 === (4))){
var inst_36225 = (state_36237[(7)]);
var inst_36225__$1 = (state_36237[(2)]);
var state_36237__$1 = (function (){var statearr_36240 = state_36237;
(statearr_36240[(7)] = inst_36225__$1);

return statearr_36240;
})();
if(cljs.core.truth_(inst_36225__$1)){
var statearr_36241_36256 = state_36237__$1;
(statearr_36241_36256[(1)] = (5));

} else {
var statearr_36242_36257 = state_36237__$1;
(statearr_36242_36257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (5))){
var inst_36225 = (state_36237[(7)]);
var inst_36227 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36225);
var state_36237__$1 = state_36237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36237__$1,(8),inst_36227);
} else {
if((state_val_36238 === (6))){
var state_36237__$1 = state_36237;
var statearr_36243_36258 = state_36237__$1;
(statearr_36243_36258[(2)] = null);

(statearr_36243_36258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (7))){
var inst_36233 = (state_36237[(2)]);
var state_36237__$1 = state_36237;
var statearr_36244_36259 = state_36237__$1;
(statearr_36244_36259[(2)] = inst_36233);

(statearr_36244_36259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (8))){
var inst_36229 = (state_36237[(2)]);
var state_36237__$1 = (function (){var statearr_36245 = state_36237;
(statearr_36245[(8)] = inst_36229);

return statearr_36245;
})();
var statearr_36246_36260 = state_36237__$1;
(statearr_36246_36260[(2)] = null);

(statearr_36246_36260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__28093__auto___36254,ch))
;
return ((function (switch__27981__auto__,c__28093__auto___36254,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27982__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27982__auto____0 = (function (){
var statearr_36250 = [null,null,null,null,null,null,null,null,null];
(statearr_36250[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27982__auto__);

(statearr_36250[(1)] = (1));

return statearr_36250;
});
var figwheel$client$heads_up_plugin_$_state_machine__27982__auto____1 = (function (state_36237){
while(true){
var ret_value__27983__auto__ = (function (){try{while(true){
var result__27984__auto__ = switch__27981__auto__.call(null,state_36237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27984__auto__;
}
break;
}
}catch (e36251){if((e36251 instanceof Object)){
var ex__27985__auto__ = e36251;
var statearr_36252_36261 = state_36237;
(statearr_36252_36261[(5)] = ex__27985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36262 = state_36237;
state_36237 = G__36262;
continue;
} else {
return ret_value__27983__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27982__auto__ = function(state_36237){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27982__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27982__auto____1.call(this,state_36237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27982__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27982__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27982__auto__;
})()
;})(switch__27981__auto__,c__28093__auto___36254,ch))
})();
var state__28095__auto__ = (function (){var statearr_36253 = f__28094__auto__.call(null);
(statearr_36253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28093__auto___36254);

return statearr_36253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28095__auto__);
});})(c__28093__auto___36254,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28093__auto__){
return (function (){
var f__28094__auto__ = (function (){var switch__27981__auto__ = ((function (c__28093__auto__){
return (function (state_36283){
var state_val_36284 = (state_36283[(1)]);
if((state_val_36284 === (1))){
var inst_36278 = cljs.core.async.timeout.call(null,(3000));
var state_36283__$1 = state_36283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36283__$1,(2),inst_36278);
} else {
if((state_val_36284 === (2))){
var inst_36280 = (state_36283[(2)]);
var inst_36281 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36283__$1 = (function (){var statearr_36285 = state_36283;
(statearr_36285[(7)] = inst_36280);

return statearr_36285;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36283__$1,inst_36281);
} else {
return null;
}
}
});})(c__28093__auto__))
;
return ((function (switch__27981__auto__,c__28093__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27982__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27982__auto____0 = (function (){
var statearr_36289 = [null,null,null,null,null,null,null,null];
(statearr_36289[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27982__auto__);

(statearr_36289[(1)] = (1));

return statearr_36289;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27982__auto____1 = (function (state_36283){
while(true){
var ret_value__27983__auto__ = (function (){try{while(true){
var result__27984__auto__ = switch__27981__auto__.call(null,state_36283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27984__auto__;
}
break;
}
}catch (e36290){if((e36290 instanceof Object)){
var ex__27985__auto__ = e36290;
var statearr_36291_36293 = state_36283;
(statearr_36291_36293[(5)] = ex__27985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36294 = state_36283;
state_36283 = G__36294;
continue;
} else {
return ret_value__27983__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27982__auto__ = function(state_36283){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27982__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27982__auto____1.call(this,state_36283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27982__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27982__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27982__auto__;
})()
;})(switch__27981__auto__,c__28093__auto__))
})();
var state__28095__auto__ = (function (){var statearr_36292 = f__28094__auto__.call(null);
(statearr_36292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28093__auto__);

return statearr_36292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28095__auto__);
});})(c__28093__auto__))
);

return c__28093__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28093__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28094__auto__ = (function (){var switch__27981__auto__ = ((function (c__28093__auto__,figwheel_version,temp__4657__auto__){
return (function (state_36317){
var state_val_36318 = (state_36317[(1)]);
if((state_val_36318 === (1))){
var inst_36311 = cljs.core.async.timeout.call(null,(2000));
var state_36317__$1 = state_36317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36317__$1,(2),inst_36311);
} else {
if((state_val_36318 === (2))){
var inst_36313 = (state_36317[(2)]);
var inst_36314 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_36315 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36314);
var state_36317__$1 = (function (){var statearr_36319 = state_36317;
(statearr_36319[(7)] = inst_36313);

return statearr_36319;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36317__$1,inst_36315);
} else {
return null;
}
}
});})(c__28093__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__27981__auto__,c__28093__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27982__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27982__auto____0 = (function (){
var statearr_36323 = [null,null,null,null,null,null,null,null];
(statearr_36323[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27982__auto__);

(statearr_36323[(1)] = (1));

return statearr_36323;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27982__auto____1 = (function (state_36317){
while(true){
var ret_value__27983__auto__ = (function (){try{while(true){
var result__27984__auto__ = switch__27981__auto__.call(null,state_36317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27984__auto__;
}
break;
}
}catch (e36324){if((e36324 instanceof Object)){
var ex__27985__auto__ = e36324;
var statearr_36325_36327 = state_36317;
(statearr_36325_36327[(5)] = ex__27985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36328 = state_36317;
state_36317 = G__36328;
continue;
} else {
return ret_value__27983__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27982__auto__ = function(state_36317){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27982__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27982__auto____1.call(this,state_36317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27982__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27982__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27982__auto__;
})()
;})(switch__27981__auto__,c__28093__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28095__auto__ = (function (){var statearr_36326 = f__28094__auto__.call(null);
(statearr_36326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28093__auto__);

return statearr_36326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28095__auto__);
});})(c__28093__auto__,figwheel_version,temp__4657__auto__))
);

return c__28093__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36329){
var map__36333 = p__36329;
var map__36333__$1 = ((((!((map__36333 == null)))?((((map__36333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36333.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36333):map__36333);
var file = cljs.core.get.call(null,map__36333__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36333__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36333__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36335 = "";
var G__36335__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__36335),cljs.core.str("file "),cljs.core.str(file)].join(''):G__36335);
var G__36335__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__36335__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__36335__$1);
if(cljs.core.truth_((function (){var and__25876__auto__ = line;
if(cljs.core.truth_(and__25876__auto__)){
return column;
} else {
return and__25876__auto__;
}
})())){
return [cljs.core.str(G__36335__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__36335__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36336){
var map__36343 = p__36336;
var map__36343__$1 = ((((!((map__36343 == null)))?((((map__36343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36343.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36343):map__36343);
var ed = map__36343__$1;
var formatted_exception = cljs.core.get.call(null,map__36343__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36343__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36343__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36345_36349 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36346_36350 = null;
var count__36347_36351 = (0);
var i__36348_36352 = (0);
while(true){
if((i__36348_36352 < count__36347_36351)){
var msg_36353 = cljs.core._nth.call(null,chunk__36346_36350,i__36348_36352);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36353);

var G__36354 = seq__36345_36349;
var G__36355 = chunk__36346_36350;
var G__36356 = count__36347_36351;
var G__36357 = (i__36348_36352 + (1));
seq__36345_36349 = G__36354;
chunk__36346_36350 = G__36355;
count__36347_36351 = G__36356;
i__36348_36352 = G__36357;
continue;
} else {
var temp__4657__auto___36358 = cljs.core.seq.call(null,seq__36345_36349);
if(temp__4657__auto___36358){
var seq__36345_36359__$1 = temp__4657__auto___36358;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36345_36359__$1)){
var c__26702__auto___36360 = cljs.core.chunk_first.call(null,seq__36345_36359__$1);
var G__36361 = cljs.core.chunk_rest.call(null,seq__36345_36359__$1);
var G__36362 = c__26702__auto___36360;
var G__36363 = cljs.core.count.call(null,c__26702__auto___36360);
var G__36364 = (0);
seq__36345_36349 = G__36361;
chunk__36346_36350 = G__36362;
count__36347_36351 = G__36363;
i__36348_36352 = G__36364;
continue;
} else {
var msg_36365 = cljs.core.first.call(null,seq__36345_36359__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36365);

var G__36366 = cljs.core.next.call(null,seq__36345_36359__$1);
var G__36367 = null;
var G__36368 = (0);
var G__36369 = (0);
seq__36345_36349 = G__36366;
chunk__36346_36350 = G__36367;
count__36347_36351 = G__36368;
i__36348_36352 = G__36369;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36370){
var map__36373 = p__36370;
var map__36373__$1 = ((((!((map__36373 == null)))?((((map__36373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36373):map__36373);
var w = map__36373__$1;
var message = cljs.core.get.call(null,map__36373__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25876__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25876__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25876__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__36385 = cljs.core.seq.call(null,plugins);
var chunk__36386 = null;
var count__36387 = (0);
var i__36388 = (0);
while(true){
if((i__36388 < count__36387)){
var vec__36389 = cljs.core._nth.call(null,chunk__36386,i__36388);
var k = cljs.core.nth.call(null,vec__36389,(0),null);
var plugin = cljs.core.nth.call(null,vec__36389,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36395 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36385,chunk__36386,count__36387,i__36388,pl_36395,vec__36389,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36395.call(null,msg_hist);
});})(seq__36385,chunk__36386,count__36387,i__36388,pl_36395,vec__36389,k,plugin))
);
} else {
}

var G__36396 = seq__36385;
var G__36397 = chunk__36386;
var G__36398 = count__36387;
var G__36399 = (i__36388 + (1));
seq__36385 = G__36396;
chunk__36386 = G__36397;
count__36387 = G__36398;
i__36388 = G__36399;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36385);
if(temp__4657__auto__){
var seq__36385__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36385__$1)){
var c__26702__auto__ = cljs.core.chunk_first.call(null,seq__36385__$1);
var G__36400 = cljs.core.chunk_rest.call(null,seq__36385__$1);
var G__36401 = c__26702__auto__;
var G__36402 = cljs.core.count.call(null,c__26702__auto__);
var G__36403 = (0);
seq__36385 = G__36400;
chunk__36386 = G__36401;
count__36387 = G__36402;
i__36388 = G__36403;
continue;
} else {
var vec__36392 = cljs.core.first.call(null,seq__36385__$1);
var k = cljs.core.nth.call(null,vec__36392,(0),null);
var plugin = cljs.core.nth.call(null,vec__36392,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36404 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36385,chunk__36386,count__36387,i__36388,pl_36404,vec__36392,k,plugin,seq__36385__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36404.call(null,msg_hist);
});})(seq__36385,chunk__36386,count__36387,i__36388,pl_36404,vec__36392,k,plugin,seq__36385__$1,temp__4657__auto__))
);
} else {
}

var G__36405 = cljs.core.next.call(null,seq__36385__$1);
var G__36406 = null;
var G__36407 = (0);
var G__36408 = (0);
seq__36385 = G__36405;
chunk__36386 = G__36406;
count__36387 = G__36407;
i__36388 = G__36408;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args36409 = [];
var len__26996__auto___36416 = arguments.length;
var i__26997__auto___36417 = (0);
while(true){
if((i__26997__auto___36417 < len__26996__auto___36416)){
args36409.push((arguments[i__26997__auto___36417]));

var G__36418 = (i__26997__auto___36417 + (1));
i__26997__auto___36417 = G__36418;
continue;
} else {
}
break;
}

var G__36411 = args36409.length;
switch (G__36411) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36409.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__36412_36420 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__36413_36421 = null;
var count__36414_36422 = (0);
var i__36415_36423 = (0);
while(true){
if((i__36415_36423 < count__36414_36422)){
var msg_36424 = cljs.core._nth.call(null,chunk__36413_36421,i__36415_36423);
figwheel.client.socket.handle_incoming_message.call(null,msg_36424);

var G__36425 = seq__36412_36420;
var G__36426 = chunk__36413_36421;
var G__36427 = count__36414_36422;
var G__36428 = (i__36415_36423 + (1));
seq__36412_36420 = G__36425;
chunk__36413_36421 = G__36426;
count__36414_36422 = G__36427;
i__36415_36423 = G__36428;
continue;
} else {
var temp__4657__auto___36429 = cljs.core.seq.call(null,seq__36412_36420);
if(temp__4657__auto___36429){
var seq__36412_36430__$1 = temp__4657__auto___36429;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36412_36430__$1)){
var c__26702__auto___36431 = cljs.core.chunk_first.call(null,seq__36412_36430__$1);
var G__36432 = cljs.core.chunk_rest.call(null,seq__36412_36430__$1);
var G__36433 = c__26702__auto___36431;
var G__36434 = cljs.core.count.call(null,c__26702__auto___36431);
var G__36435 = (0);
seq__36412_36420 = G__36432;
chunk__36413_36421 = G__36433;
count__36414_36422 = G__36434;
i__36415_36423 = G__36435;
continue;
} else {
var msg_36436 = cljs.core.first.call(null,seq__36412_36430__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_36436);

var G__36437 = cljs.core.next.call(null,seq__36412_36430__$1);
var G__36438 = null;
var G__36439 = (0);
var G__36440 = (0);
seq__36412_36420 = G__36437;
chunk__36413_36421 = G__36438;
count__36414_36422 = G__36439;
i__36415_36423 = G__36440;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__27003__auto__ = [];
var len__26996__auto___36445 = arguments.length;
var i__26997__auto___36446 = (0);
while(true){
if((i__26997__auto___36446 < len__26996__auto___36445)){
args__27003__auto__.push((arguments[i__26997__auto___36446]));

var G__36447 = (i__26997__auto___36446 + (1));
i__26997__auto___36446 = G__36447;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36442){
var map__36443 = p__36442;
var map__36443__$1 = ((((!((map__36443 == null)))?((((map__36443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36443.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36443):map__36443);
var opts = map__36443__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36441){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36441));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e36449){if((e36449 instanceof Error)){
var e = e36449;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e36449;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__36453){
var map__36454 = p__36453;
var map__36454__$1 = ((((!((map__36454 == null)))?((((map__36454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36454.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36454):map__36454);
var msg_name = cljs.core.get.call(null,map__36454__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1480863934580