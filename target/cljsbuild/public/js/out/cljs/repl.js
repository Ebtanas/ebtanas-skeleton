// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33459){
var map__33484 = p__33459;
var map__33484__$1 = ((((!((map__33484 == null)))?((((map__33484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33484.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33484):map__33484);
var m = map__33484__$1;
var n = cljs.core.get.call(null,map__33484__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__33484__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33486_33508 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33487_33509 = null;
var count__33488_33510 = (0);
var i__33489_33511 = (0);
while(true){
if((i__33489_33511 < count__33488_33510)){
var f_33512 = cljs.core._nth.call(null,chunk__33487_33509,i__33489_33511);
cljs.core.println.call(null,"  ",f_33512);

var G__33513 = seq__33486_33508;
var G__33514 = chunk__33487_33509;
var G__33515 = count__33488_33510;
var G__33516 = (i__33489_33511 + (1));
seq__33486_33508 = G__33513;
chunk__33487_33509 = G__33514;
count__33488_33510 = G__33515;
i__33489_33511 = G__33516;
continue;
} else {
var temp__4657__auto___33517 = cljs.core.seq.call(null,seq__33486_33508);
if(temp__4657__auto___33517){
var seq__33486_33518__$1 = temp__4657__auto___33517;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33486_33518__$1)){
var c__26702__auto___33519 = cljs.core.chunk_first.call(null,seq__33486_33518__$1);
var G__33520 = cljs.core.chunk_rest.call(null,seq__33486_33518__$1);
var G__33521 = c__26702__auto___33519;
var G__33522 = cljs.core.count.call(null,c__26702__auto___33519);
var G__33523 = (0);
seq__33486_33508 = G__33520;
chunk__33487_33509 = G__33521;
count__33488_33510 = G__33522;
i__33489_33511 = G__33523;
continue;
} else {
var f_33524 = cljs.core.first.call(null,seq__33486_33518__$1);
cljs.core.println.call(null,"  ",f_33524);

var G__33525 = cljs.core.next.call(null,seq__33486_33518__$1);
var G__33526 = null;
var G__33527 = (0);
var G__33528 = (0);
seq__33486_33508 = G__33525;
chunk__33487_33509 = G__33526;
count__33488_33510 = G__33527;
i__33489_33511 = G__33528;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33529 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25888__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25888__auto__)){
return or__25888__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_33529);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_33529)))?cljs.core.second.call(null,arglists_33529):arglists_33529));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33490_33530 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33491_33531 = null;
var count__33492_33532 = (0);
var i__33493_33533 = (0);
while(true){
if((i__33493_33533 < count__33492_33532)){
var vec__33494_33534 = cljs.core._nth.call(null,chunk__33491_33531,i__33493_33533);
var name_33535 = cljs.core.nth.call(null,vec__33494_33534,(0),null);
var map__33497_33536 = cljs.core.nth.call(null,vec__33494_33534,(1),null);
var map__33497_33537__$1 = ((((!((map__33497_33536 == null)))?((((map__33497_33536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33497_33536.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33497_33536):map__33497_33536);
var doc_33538 = cljs.core.get.call(null,map__33497_33537__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33539 = cljs.core.get.call(null,map__33497_33537__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33535);

cljs.core.println.call(null," ",arglists_33539);

if(cljs.core.truth_(doc_33538)){
cljs.core.println.call(null," ",doc_33538);
} else {
}

var G__33540 = seq__33490_33530;
var G__33541 = chunk__33491_33531;
var G__33542 = count__33492_33532;
var G__33543 = (i__33493_33533 + (1));
seq__33490_33530 = G__33540;
chunk__33491_33531 = G__33541;
count__33492_33532 = G__33542;
i__33493_33533 = G__33543;
continue;
} else {
var temp__4657__auto___33544 = cljs.core.seq.call(null,seq__33490_33530);
if(temp__4657__auto___33544){
var seq__33490_33545__$1 = temp__4657__auto___33544;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33490_33545__$1)){
var c__26702__auto___33546 = cljs.core.chunk_first.call(null,seq__33490_33545__$1);
var G__33547 = cljs.core.chunk_rest.call(null,seq__33490_33545__$1);
var G__33548 = c__26702__auto___33546;
var G__33549 = cljs.core.count.call(null,c__26702__auto___33546);
var G__33550 = (0);
seq__33490_33530 = G__33547;
chunk__33491_33531 = G__33548;
count__33492_33532 = G__33549;
i__33493_33533 = G__33550;
continue;
} else {
var vec__33499_33551 = cljs.core.first.call(null,seq__33490_33545__$1);
var name_33552 = cljs.core.nth.call(null,vec__33499_33551,(0),null);
var map__33502_33553 = cljs.core.nth.call(null,vec__33499_33551,(1),null);
var map__33502_33554__$1 = ((((!((map__33502_33553 == null)))?((((map__33502_33553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33502_33553.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33502_33553):map__33502_33553);
var doc_33555 = cljs.core.get.call(null,map__33502_33554__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33556 = cljs.core.get.call(null,map__33502_33554__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_33552);

cljs.core.println.call(null," ",arglists_33556);

if(cljs.core.truth_(doc_33555)){
cljs.core.println.call(null," ",doc_33555);
} else {
}

var G__33557 = cljs.core.next.call(null,seq__33490_33545__$1);
var G__33558 = null;
var G__33559 = (0);
var G__33560 = (0);
seq__33490_33530 = G__33557;
chunk__33491_33531 = G__33558;
count__33492_33532 = G__33559;
i__33493_33533 = G__33560;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__33504 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33505 = null;
var count__33506 = (0);
var i__33507 = (0);
while(true){
if((i__33507 < count__33506)){
var role = cljs.core._nth.call(null,chunk__33505,i__33507);
var temp__4657__auto___33561__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___33561__$1)){
var spec_33562 = temp__4657__auto___33561__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_33562));
} else {
}

var G__33563 = seq__33504;
var G__33564 = chunk__33505;
var G__33565 = count__33506;
var G__33566 = (i__33507 + (1));
seq__33504 = G__33563;
chunk__33505 = G__33564;
count__33506 = G__33565;
i__33507 = G__33566;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__33504);
if(temp__4657__auto____$1){
var seq__33504__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33504__$1)){
var c__26702__auto__ = cljs.core.chunk_first.call(null,seq__33504__$1);
var G__33567 = cljs.core.chunk_rest.call(null,seq__33504__$1);
var G__33568 = c__26702__auto__;
var G__33569 = cljs.core.count.call(null,c__26702__auto__);
var G__33570 = (0);
seq__33504 = G__33567;
chunk__33505 = G__33568;
count__33506 = G__33569;
i__33507 = G__33570;
continue;
} else {
var role = cljs.core.first.call(null,seq__33504__$1);
var temp__4657__auto___33571__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___33571__$2)){
var spec_33572 = temp__4657__auto___33571__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_33572));
} else {
}

var G__33573 = cljs.core.next.call(null,seq__33504__$1);
var G__33574 = null;
var G__33575 = (0);
var G__33576 = (0);
seq__33504 = G__33573;
chunk__33505 = G__33574;
count__33506 = G__33575;
i__33507 = G__33576;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1480863931386