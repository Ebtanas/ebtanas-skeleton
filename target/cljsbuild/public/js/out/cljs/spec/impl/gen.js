// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__26494__auto__,writer__26495__auto__,opt__26496__auto__){
return cljs.core._write.call(null,writer__26495__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32182 = arguments.length;
var i__26997__auto___32183 = (0);
while(true){
if((i__26997__auto___32183 < len__26996__auto___32182)){
args__27003__auto__.push((arguments[i__26997__auto___32183]));

var G__32184 = (i__26997__auto___32183 + (1));
i__26997__auto___32183 = G__32184;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq32181){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32181));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32186 = arguments.length;
var i__26997__auto___32187 = (0);
while(true){
if((i__26997__auto___32187 < len__26996__auto___32186)){
args__27003__auto__.push((arguments[i__26997__auto___32187]));

var G__32188 = (i__26997__auto___32187 + (1));
i__26997__auto___32187 = G__32188;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq32185){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32185));
});

var g_QMARK__32189 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_32190 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__32189){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__32189))
,null));
var mkg_32191 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__32189,g_32190){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__32189,g_32190))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__32189,g_32190,mkg_32191){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__32189).call(null,x);
});})(g_QMARK__32189,g_32190,mkg_32191))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__32189,g_32190,mkg_32191){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_32191).call(null,gfn);
});})(g_QMARK__32189,g_32190,mkg_32191))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__32189,g_32190,mkg_32191){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_32190).call(null,generator);
});})(g_QMARK__32189,g_32190,mkg_32191))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__32153__auto___32210 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__32153__auto___32210){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32211 = arguments.length;
var i__26997__auto___32212 = (0);
while(true){
if((i__26997__auto___32212 < len__26996__auto___32211)){
args__27003__auto__.push((arguments[i__26997__auto___32212]));

var G__32213 = (i__26997__auto___32212 + (1));
i__26997__auto___32212 = G__32213;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32153__auto___32210))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32153__auto___32210){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32153__auto___32210),args);
});})(g__32153__auto___32210))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__32153__auto___32210){
return (function (seq32192){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32192));
});})(g__32153__auto___32210))
;


var g__32153__auto___32214 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__32153__auto___32214){
return (function cljs$spec$impl$gen$list(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32215 = arguments.length;
var i__26997__auto___32216 = (0);
while(true){
if((i__26997__auto___32216 < len__26996__auto___32215)){
args__27003__auto__.push((arguments[i__26997__auto___32216]));

var G__32217 = (i__26997__auto___32216 + (1));
i__26997__auto___32216 = G__32217;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32153__auto___32214))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32153__auto___32214){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32153__auto___32214),args);
});})(g__32153__auto___32214))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__32153__auto___32214){
return (function (seq32193){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32193));
});})(g__32153__auto___32214))
;


var g__32153__auto___32218 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__32153__auto___32218){
return (function cljs$spec$impl$gen$map(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32219 = arguments.length;
var i__26997__auto___32220 = (0);
while(true){
if((i__26997__auto___32220 < len__26996__auto___32219)){
args__27003__auto__.push((arguments[i__26997__auto___32220]));

var G__32221 = (i__26997__auto___32220 + (1));
i__26997__auto___32220 = G__32221;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32153__auto___32218))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32153__auto___32218){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32153__auto___32218),args);
});})(g__32153__auto___32218))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__32153__auto___32218){
return (function (seq32194){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32194));
});})(g__32153__auto___32218))
;


var g__32153__auto___32222 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__32153__auto___32222){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32223 = arguments.length;
var i__26997__auto___32224 = (0);
while(true){
if((i__26997__auto___32224 < len__26996__auto___32223)){
args__27003__auto__.push((arguments[i__26997__auto___32224]));

var G__32225 = (i__26997__auto___32224 + (1));
i__26997__auto___32224 = G__32225;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32153__auto___32222))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32153__auto___32222){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32153__auto___32222),args);
});})(g__32153__auto___32222))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__32153__auto___32222){
return (function (seq32195){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32195));
});})(g__32153__auto___32222))
;


var g__32153__auto___32226 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__32153__auto___32226){
return (function cljs$spec$impl$gen$set(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32227 = arguments.length;
var i__26997__auto___32228 = (0);
while(true){
if((i__26997__auto___32228 < len__26996__auto___32227)){
args__27003__auto__.push((arguments[i__26997__auto___32228]));

var G__32229 = (i__26997__auto___32228 + (1));
i__26997__auto___32228 = G__32229;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32153__auto___32226))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32153__auto___32226){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32153__auto___32226),args);
});})(g__32153__auto___32226))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__32153__auto___32226){
return (function (seq32196){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32196));
});})(g__32153__auto___32226))
;


var g__32153__auto___32230 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__32153__auto___32230){
return (function cljs$spec$impl$gen$vector(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32231 = arguments.length;
var i__26997__auto___32232 = (0);
while(true){
if((i__26997__auto___32232 < len__26996__auto___32231)){
args__27003__auto__.push((arguments[i__26997__auto___32232]));

var G__32233 = (i__26997__auto___32232 + (1));
i__26997__auto___32232 = G__32233;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32153__auto___32230))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32153__auto___32230){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32153__auto___32230),args);
});})(g__32153__auto___32230))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__32153__auto___32230){
return (function (seq32197){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32197));
});})(g__32153__auto___32230))
;


var g__32153__auto___32234 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__32153__auto___32234){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32235 = arguments.length;
var i__26997__auto___32236 = (0);
while(true){
if((i__26997__auto___32236 < len__26996__auto___32235)){
args__27003__auto__.push((arguments[i__26997__auto___32236]));

var G__32237 = (i__26997__auto___32236 + (1));
i__26997__auto___32236 = G__32237;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32153__auto___32234))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32153__auto___32234){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32153__auto___32234),args);
});})(g__32153__auto___32234))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__32153__auto___32234){
return (function (seq32198){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32198));
});})(g__32153__auto___32234))
;


var g__32153__auto___32238 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__32153__auto___32238){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32239 = arguments.length;
var i__26997__auto___32240 = (0);
while(true){
if((i__26997__auto___32240 < len__26996__auto___32239)){
args__27003__auto__.push((arguments[i__26997__auto___32240]));

var G__32241 = (i__26997__auto___32240 + (1));
i__26997__auto___32240 = G__32241;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32153__auto___32238))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32153__auto___32238){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32153__auto___32238),args);
});})(g__32153__auto___32238))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__32153__auto___32238){
return (function (seq32199){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32199));
});})(g__32153__auto___32238))
;


var g__32153__auto___32242 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__32153__auto___32242){
return (function cljs$spec$impl$gen$elements(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32243 = arguments.length;
var i__26997__auto___32244 = (0);
while(true){
if((i__26997__auto___32244 < len__26996__auto___32243)){
args__27003__auto__.push((arguments[i__26997__auto___32244]));

var G__32245 = (i__26997__auto___32244 + (1));
i__26997__auto___32244 = G__32245;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32153__auto___32242))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32153__auto___32242){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32153__auto___32242),args);
});})(g__32153__auto___32242))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__32153__auto___32242){
return (function (seq32200){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32200));
});})(g__32153__auto___32242))
;


var g__32153__auto___32246 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__32153__auto___32246){
return (function cljs$spec$impl$gen$bind(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32247 = arguments.length;
var i__26997__auto___32248 = (0);
while(true){
if((i__26997__auto___32248 < len__26996__auto___32247)){
args__27003__auto__.push((arguments[i__26997__auto___32248]));

var G__32249 = (i__26997__auto___32248 + (1));
i__26997__auto___32248 = G__32249;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32153__auto___32246))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32153__auto___32246){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32153__auto___32246),args);
});})(g__32153__auto___32246))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__32153__auto___32246){
return (function (seq32201){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32201));
});})(g__32153__auto___32246))
;


var g__32153__auto___32250 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__32153__auto___32250){
return (function cljs$spec$impl$gen$choose(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32251 = arguments.length;
var i__26997__auto___32252 = (0);
while(true){
if((i__26997__auto___32252 < len__26996__auto___32251)){
args__27003__auto__.push((arguments[i__26997__auto___32252]));

var G__32253 = (i__26997__auto___32252 + (1));
i__26997__auto___32252 = G__32253;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32153__auto___32250))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32153__auto___32250){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32153__auto___32250),args);
});})(g__32153__auto___32250))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__32153__auto___32250){
return (function (seq32202){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32202));
});})(g__32153__auto___32250))
;


var g__32153__auto___32254 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__32153__auto___32254){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32255 = arguments.length;
var i__26997__auto___32256 = (0);
while(true){
if((i__26997__auto___32256 < len__26996__auto___32255)){
args__27003__auto__.push((arguments[i__26997__auto___32256]));

var G__32257 = (i__26997__auto___32256 + (1));
i__26997__auto___32256 = G__32257;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32153__auto___32254))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32153__auto___32254){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32153__auto___32254),args);
});})(g__32153__auto___32254))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__32153__auto___32254){
return (function (seq32203){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32203));
});})(g__32153__auto___32254))
;


var g__32153__auto___32258 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__32153__auto___32258){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32259 = arguments.length;
var i__26997__auto___32260 = (0);
while(true){
if((i__26997__auto___32260 < len__26996__auto___32259)){
args__27003__auto__.push((arguments[i__26997__auto___32260]));

var G__32261 = (i__26997__auto___32260 + (1));
i__26997__auto___32260 = G__32261;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32153__auto___32258))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32153__auto___32258){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32153__auto___32258),args);
});})(g__32153__auto___32258))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__32153__auto___32258){
return (function (seq32204){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32204));
});})(g__32153__auto___32258))
;


var g__32153__auto___32262 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__32153__auto___32262){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32263 = arguments.length;
var i__26997__auto___32264 = (0);
while(true){
if((i__26997__auto___32264 < len__26996__auto___32263)){
args__27003__auto__.push((arguments[i__26997__auto___32264]));

var G__32265 = (i__26997__auto___32264 + (1));
i__26997__auto___32264 = G__32265;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32153__auto___32262))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32153__auto___32262){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32153__auto___32262),args);
});})(g__32153__auto___32262))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__32153__auto___32262){
return (function (seq32205){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32205));
});})(g__32153__auto___32262))
;


var g__32153__auto___32266 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__32153__auto___32266){
return (function cljs$spec$impl$gen$sample(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32267 = arguments.length;
var i__26997__auto___32268 = (0);
while(true){
if((i__26997__auto___32268 < len__26996__auto___32267)){
args__27003__auto__.push((arguments[i__26997__auto___32268]));

var G__32269 = (i__26997__auto___32268 + (1));
i__26997__auto___32268 = G__32269;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32153__auto___32266))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32153__auto___32266){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32153__auto___32266),args);
});})(g__32153__auto___32266))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__32153__auto___32266){
return (function (seq32206){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32206));
});})(g__32153__auto___32266))
;


var g__32153__auto___32270 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__32153__auto___32270){
return (function cljs$spec$impl$gen$return(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32271 = arguments.length;
var i__26997__auto___32272 = (0);
while(true){
if((i__26997__auto___32272 < len__26996__auto___32271)){
args__27003__auto__.push((arguments[i__26997__auto___32272]));

var G__32273 = (i__26997__auto___32272 + (1));
i__26997__auto___32272 = G__32273;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32153__auto___32270))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32153__auto___32270){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32153__auto___32270),args);
});})(g__32153__auto___32270))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__32153__auto___32270){
return (function (seq32207){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32207));
});})(g__32153__auto___32270))
;


var g__32153__auto___32274 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__32153__auto___32274){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32275 = arguments.length;
var i__26997__auto___32276 = (0);
while(true){
if((i__26997__auto___32276 < len__26996__auto___32275)){
args__27003__auto__.push((arguments[i__26997__auto___32276]));

var G__32277 = (i__26997__auto___32276 + (1));
i__26997__auto___32276 = G__32277;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32153__auto___32274))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32153__auto___32274){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32153__auto___32274),args);
});})(g__32153__auto___32274))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__32153__auto___32274){
return (function (seq32208){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32208));
});})(g__32153__auto___32274))
;


var g__32153__auto___32278 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__32153__auto___32278){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32279 = arguments.length;
var i__26997__auto___32280 = (0);
while(true){
if((i__26997__auto___32280 < len__26996__auto___32279)){
args__27003__auto__.push((arguments[i__26997__auto___32280]));

var G__32281 = (i__26997__auto___32280 + (1));
i__26997__auto___32280 = G__32281;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32153__auto___32278))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32153__auto___32278){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32153__auto___32278),args);
});})(g__32153__auto___32278))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__32153__auto___32278){
return (function (seq32209){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32209));
});})(g__32153__auto___32278))
;

var g__32166__auto___32303 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__32166__auto___32303){
return (function cljs$spec$impl$gen$any(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32304 = arguments.length;
var i__26997__auto___32305 = (0);
while(true){
if((i__26997__auto___32305 < len__26996__auto___32304)){
args__27003__auto__.push((arguments[i__26997__auto___32305]));

var G__32306 = (i__26997__auto___32305 + (1));
i__26997__auto___32305 = G__32306;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32166__auto___32303))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32166__auto___32303){
return (function (args){
return cljs.core.deref.call(null,g__32166__auto___32303);
});})(g__32166__auto___32303))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__32166__auto___32303){
return (function (seq32282){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32282));
});})(g__32166__auto___32303))
;


var g__32166__auto___32307 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__32166__auto___32307){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32308 = arguments.length;
var i__26997__auto___32309 = (0);
while(true){
if((i__26997__auto___32309 < len__26996__auto___32308)){
args__27003__auto__.push((arguments[i__26997__auto___32309]));

var G__32310 = (i__26997__auto___32309 + (1));
i__26997__auto___32309 = G__32310;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32166__auto___32307))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32166__auto___32307){
return (function (args){
return cljs.core.deref.call(null,g__32166__auto___32307);
});})(g__32166__auto___32307))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__32166__auto___32307){
return (function (seq32283){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32283));
});})(g__32166__auto___32307))
;


var g__32166__auto___32311 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__32166__auto___32311){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32312 = arguments.length;
var i__26997__auto___32313 = (0);
while(true){
if((i__26997__auto___32313 < len__26996__auto___32312)){
args__27003__auto__.push((arguments[i__26997__auto___32313]));

var G__32314 = (i__26997__auto___32313 + (1));
i__26997__auto___32313 = G__32314;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32166__auto___32311))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32166__auto___32311){
return (function (args){
return cljs.core.deref.call(null,g__32166__auto___32311);
});})(g__32166__auto___32311))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__32166__auto___32311){
return (function (seq32284){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32284));
});})(g__32166__auto___32311))
;


var g__32166__auto___32315 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__32166__auto___32315){
return (function cljs$spec$impl$gen$char(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32316 = arguments.length;
var i__26997__auto___32317 = (0);
while(true){
if((i__26997__auto___32317 < len__26996__auto___32316)){
args__27003__auto__.push((arguments[i__26997__auto___32317]));

var G__32318 = (i__26997__auto___32317 + (1));
i__26997__auto___32317 = G__32318;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32166__auto___32315))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32166__auto___32315){
return (function (args){
return cljs.core.deref.call(null,g__32166__auto___32315);
});})(g__32166__auto___32315))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__32166__auto___32315){
return (function (seq32285){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32285));
});})(g__32166__auto___32315))
;


var g__32166__auto___32319 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__32166__auto___32319){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32320 = arguments.length;
var i__26997__auto___32321 = (0);
while(true){
if((i__26997__auto___32321 < len__26996__auto___32320)){
args__27003__auto__.push((arguments[i__26997__auto___32321]));

var G__32322 = (i__26997__auto___32321 + (1));
i__26997__auto___32321 = G__32322;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32166__auto___32319))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32166__auto___32319){
return (function (args){
return cljs.core.deref.call(null,g__32166__auto___32319);
});})(g__32166__auto___32319))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__32166__auto___32319){
return (function (seq32286){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32286));
});})(g__32166__auto___32319))
;


var g__32166__auto___32323 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__32166__auto___32323){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32324 = arguments.length;
var i__26997__auto___32325 = (0);
while(true){
if((i__26997__auto___32325 < len__26996__auto___32324)){
args__27003__auto__.push((arguments[i__26997__auto___32325]));

var G__32326 = (i__26997__auto___32325 + (1));
i__26997__auto___32325 = G__32326;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32166__auto___32323))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32166__auto___32323){
return (function (args){
return cljs.core.deref.call(null,g__32166__auto___32323);
});})(g__32166__auto___32323))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__32166__auto___32323){
return (function (seq32287){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32287));
});})(g__32166__auto___32323))
;


var g__32166__auto___32327 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__32166__auto___32327){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32328 = arguments.length;
var i__26997__auto___32329 = (0);
while(true){
if((i__26997__auto___32329 < len__26996__auto___32328)){
args__27003__auto__.push((arguments[i__26997__auto___32329]));

var G__32330 = (i__26997__auto___32329 + (1));
i__26997__auto___32329 = G__32330;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32166__auto___32327))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32166__auto___32327){
return (function (args){
return cljs.core.deref.call(null,g__32166__auto___32327);
});})(g__32166__auto___32327))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__32166__auto___32327){
return (function (seq32288){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32288));
});})(g__32166__auto___32327))
;


var g__32166__auto___32331 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__32166__auto___32331){
return (function cljs$spec$impl$gen$double(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32332 = arguments.length;
var i__26997__auto___32333 = (0);
while(true){
if((i__26997__auto___32333 < len__26996__auto___32332)){
args__27003__auto__.push((arguments[i__26997__auto___32333]));

var G__32334 = (i__26997__auto___32333 + (1));
i__26997__auto___32333 = G__32334;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32166__auto___32331))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32166__auto___32331){
return (function (args){
return cljs.core.deref.call(null,g__32166__auto___32331);
});})(g__32166__auto___32331))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__32166__auto___32331){
return (function (seq32289){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32289));
});})(g__32166__auto___32331))
;


var g__32166__auto___32335 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__32166__auto___32335){
return (function cljs$spec$impl$gen$int(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32336 = arguments.length;
var i__26997__auto___32337 = (0);
while(true){
if((i__26997__auto___32337 < len__26996__auto___32336)){
args__27003__auto__.push((arguments[i__26997__auto___32337]));

var G__32338 = (i__26997__auto___32337 + (1));
i__26997__auto___32337 = G__32338;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32166__auto___32335))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32166__auto___32335){
return (function (args){
return cljs.core.deref.call(null,g__32166__auto___32335);
});})(g__32166__auto___32335))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__32166__auto___32335){
return (function (seq32290){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32290));
});})(g__32166__auto___32335))
;


var g__32166__auto___32339 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__32166__auto___32339){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32340 = arguments.length;
var i__26997__auto___32341 = (0);
while(true){
if((i__26997__auto___32341 < len__26996__auto___32340)){
args__27003__auto__.push((arguments[i__26997__auto___32341]));

var G__32342 = (i__26997__auto___32341 + (1));
i__26997__auto___32341 = G__32342;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32166__auto___32339))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32166__auto___32339){
return (function (args){
return cljs.core.deref.call(null,g__32166__auto___32339);
});})(g__32166__auto___32339))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__32166__auto___32339){
return (function (seq32291){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32291));
});})(g__32166__auto___32339))
;


var g__32166__auto___32343 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__32166__auto___32343){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32344 = arguments.length;
var i__26997__auto___32345 = (0);
while(true){
if((i__26997__auto___32345 < len__26996__auto___32344)){
args__27003__auto__.push((arguments[i__26997__auto___32345]));

var G__32346 = (i__26997__auto___32345 + (1));
i__26997__auto___32345 = G__32346;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32166__auto___32343))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32166__auto___32343){
return (function (args){
return cljs.core.deref.call(null,g__32166__auto___32343);
});})(g__32166__auto___32343))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__32166__auto___32343){
return (function (seq32292){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32292));
});})(g__32166__auto___32343))
;


var g__32166__auto___32347 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__32166__auto___32347){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32348 = arguments.length;
var i__26997__auto___32349 = (0);
while(true){
if((i__26997__auto___32349 < len__26996__auto___32348)){
args__27003__auto__.push((arguments[i__26997__auto___32349]));

var G__32350 = (i__26997__auto___32349 + (1));
i__26997__auto___32349 = G__32350;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32166__auto___32347))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32166__auto___32347){
return (function (args){
return cljs.core.deref.call(null,g__32166__auto___32347);
});})(g__32166__auto___32347))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__32166__auto___32347){
return (function (seq32293){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32293));
});})(g__32166__auto___32347))
;


var g__32166__auto___32351 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__32166__auto___32351){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32352 = arguments.length;
var i__26997__auto___32353 = (0);
while(true){
if((i__26997__auto___32353 < len__26996__auto___32352)){
args__27003__auto__.push((arguments[i__26997__auto___32353]));

var G__32354 = (i__26997__auto___32353 + (1));
i__26997__auto___32353 = G__32354;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32166__auto___32351))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32166__auto___32351){
return (function (args){
return cljs.core.deref.call(null,g__32166__auto___32351);
});})(g__32166__auto___32351))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__32166__auto___32351){
return (function (seq32294){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32294));
});})(g__32166__auto___32351))
;


var g__32166__auto___32355 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__32166__auto___32355){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32356 = arguments.length;
var i__26997__auto___32357 = (0);
while(true){
if((i__26997__auto___32357 < len__26996__auto___32356)){
args__27003__auto__.push((arguments[i__26997__auto___32357]));

var G__32358 = (i__26997__auto___32357 + (1));
i__26997__auto___32357 = G__32358;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32166__auto___32355))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32166__auto___32355){
return (function (args){
return cljs.core.deref.call(null,g__32166__auto___32355);
});})(g__32166__auto___32355))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__32166__auto___32355){
return (function (seq32295){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32295));
});})(g__32166__auto___32355))
;


var g__32166__auto___32359 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__32166__auto___32359){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32360 = arguments.length;
var i__26997__auto___32361 = (0);
while(true){
if((i__26997__auto___32361 < len__26996__auto___32360)){
args__27003__auto__.push((arguments[i__26997__auto___32361]));

var G__32362 = (i__26997__auto___32361 + (1));
i__26997__auto___32361 = G__32362;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32166__auto___32359))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32166__auto___32359){
return (function (args){
return cljs.core.deref.call(null,g__32166__auto___32359);
});})(g__32166__auto___32359))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__32166__auto___32359){
return (function (seq32296){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32296));
});})(g__32166__auto___32359))
;


var g__32166__auto___32363 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__32166__auto___32363){
return (function cljs$spec$impl$gen$string(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32364 = arguments.length;
var i__26997__auto___32365 = (0);
while(true){
if((i__26997__auto___32365 < len__26996__auto___32364)){
args__27003__auto__.push((arguments[i__26997__auto___32365]));

var G__32366 = (i__26997__auto___32365 + (1));
i__26997__auto___32365 = G__32366;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32166__auto___32363))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32166__auto___32363){
return (function (args){
return cljs.core.deref.call(null,g__32166__auto___32363);
});})(g__32166__auto___32363))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__32166__auto___32363){
return (function (seq32297){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32297));
});})(g__32166__auto___32363))
;


var g__32166__auto___32367 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__32166__auto___32367){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32368 = arguments.length;
var i__26997__auto___32369 = (0);
while(true){
if((i__26997__auto___32369 < len__26996__auto___32368)){
args__27003__auto__.push((arguments[i__26997__auto___32369]));

var G__32370 = (i__26997__auto___32369 + (1));
i__26997__auto___32369 = G__32370;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32166__auto___32367))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32166__auto___32367){
return (function (args){
return cljs.core.deref.call(null,g__32166__auto___32367);
});})(g__32166__auto___32367))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__32166__auto___32367){
return (function (seq32298){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32298));
});})(g__32166__auto___32367))
;


var g__32166__auto___32371 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__32166__auto___32371){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32372 = arguments.length;
var i__26997__auto___32373 = (0);
while(true){
if((i__26997__auto___32373 < len__26996__auto___32372)){
args__27003__auto__.push((arguments[i__26997__auto___32373]));

var G__32374 = (i__26997__auto___32373 + (1));
i__26997__auto___32373 = G__32374;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32166__auto___32371))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32166__auto___32371){
return (function (args){
return cljs.core.deref.call(null,g__32166__auto___32371);
});})(g__32166__auto___32371))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__32166__auto___32371){
return (function (seq32299){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32299));
});})(g__32166__auto___32371))
;


var g__32166__auto___32375 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__32166__auto___32375){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32376 = arguments.length;
var i__26997__auto___32377 = (0);
while(true){
if((i__26997__auto___32377 < len__26996__auto___32376)){
args__27003__auto__.push((arguments[i__26997__auto___32377]));

var G__32378 = (i__26997__auto___32377 + (1));
i__26997__auto___32377 = G__32378;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32166__auto___32375))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32166__auto___32375){
return (function (args){
return cljs.core.deref.call(null,g__32166__auto___32375);
});})(g__32166__auto___32375))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__32166__auto___32375){
return (function (seq32300){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32300));
});})(g__32166__auto___32375))
;


var g__32166__auto___32379 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__32166__auto___32379){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32380 = arguments.length;
var i__26997__auto___32381 = (0);
while(true){
if((i__26997__auto___32381 < len__26996__auto___32380)){
args__27003__auto__.push((arguments[i__26997__auto___32381]));

var G__32382 = (i__26997__auto___32381 + (1));
i__26997__auto___32381 = G__32382;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32166__auto___32379))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32166__auto___32379){
return (function (args){
return cljs.core.deref.call(null,g__32166__auto___32379);
});})(g__32166__auto___32379))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__32166__auto___32379){
return (function (seq32301){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32301));
});})(g__32166__auto___32379))
;


var g__32166__auto___32383 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__32166__auto___32383){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32384 = arguments.length;
var i__26997__auto___32385 = (0);
while(true){
if((i__26997__auto___32385 < len__26996__auto___32384)){
args__27003__auto__.push((arguments[i__26997__auto___32385]));

var G__32386 = (i__26997__auto___32385 + (1));
i__26997__auto___32385 = G__32386;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});})(g__32166__auto___32383))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32166__auto___32383){
return (function (args){
return cljs.core.deref.call(null,g__32166__auto___32383);
});})(g__32166__auto___32383))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__32166__auto___32383){
return (function (seq32302){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32302));
});})(g__32166__auto___32383))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__27003__auto__ = [];
var len__26996__auto___32389 = arguments.length;
var i__26997__auto___32390 = (0);
while(true){
if((i__26997__auto___32390 < len__26996__auto___32389)){
args__27003__auto__.push((arguments[i__26997__auto___32390]));

var G__32391 = (i__26997__auto___32390 + (1));
i__26997__auto___32390 = G__32391;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((0) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__27004__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__32387_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__32387_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq32388){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32388));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__32392_SHARP_){
return (new Date(p1__32392_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1480863929975