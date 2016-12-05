// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args28138 = [];
var len__26996__auto___28144 = arguments.length;
var i__26997__auto___28145 = (0);
while(true){
if((i__26997__auto___28145 < len__26996__auto___28144)){
args28138.push((arguments[i__26997__auto___28145]));

var G__28146 = (i__26997__auto___28145 + (1));
i__26997__auto___28145 = G__28146;
continue;
} else {
}
break;
}

var G__28140 = args28138.length;
switch (G__28140) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28138.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28141 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28141 = (function (f,blockable,meta28142){
this.f = f;
this.blockable = blockable;
this.meta28142 = meta28142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28143,meta28142__$1){
var self__ = this;
var _28143__$1 = this;
return (new cljs.core.async.t_cljs$core$async28141(self__.f,self__.blockable,meta28142__$1));
});

cljs.core.async.t_cljs$core$async28141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28143){
var self__ = this;
var _28143__$1 = this;
return self__.meta28142;
});

cljs.core.async.t_cljs$core$async28141.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28141.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28141.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28141.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28141.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28142","meta28142",2076600270,null)], null);
});

cljs.core.async.t_cljs$core$async28141.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28141.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28141";

cljs.core.async.t_cljs$core$async28141.cljs$lang$ctorPrWriter = (function (this__26494__auto__,writer__26495__auto__,opt__26496__auto__){
return cljs.core._write.call(null,writer__26495__auto__,"cljs.core.async/t_cljs$core$async28141");
});

cljs.core.async.__GT_t_cljs$core$async28141 = (function cljs$core$async$__GT_t_cljs$core$async28141(f__$1,blockable__$1,meta28142){
return (new cljs.core.async.t_cljs$core$async28141(f__$1,blockable__$1,meta28142));
});

}

return (new cljs.core.async.t_cljs$core$async28141(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args28150 = [];
var len__26996__auto___28153 = arguments.length;
var i__26997__auto___28154 = (0);
while(true){
if((i__26997__auto___28154 < len__26996__auto___28153)){
args28150.push((arguments[i__26997__auto___28154]));

var G__28155 = (i__26997__auto___28154 + (1));
i__26997__auto___28154 = G__28155;
continue;
} else {
}
break;
}

var G__28152 = args28150.length;
switch (G__28152) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28150.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args28157 = [];
var len__26996__auto___28160 = arguments.length;
var i__26997__auto___28161 = (0);
while(true){
if((i__26997__auto___28161 < len__26996__auto___28160)){
args28157.push((arguments[i__26997__auto___28161]));

var G__28162 = (i__26997__auto___28161 + (1));
i__26997__auto___28161 = G__28162;
continue;
} else {
}
break;
}

var G__28159 = args28157.length;
switch (G__28159) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28157.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args28164 = [];
var len__26996__auto___28167 = arguments.length;
var i__26997__auto___28168 = (0);
while(true){
if((i__26997__auto___28168 < len__26996__auto___28167)){
args28164.push((arguments[i__26997__auto___28168]));

var G__28169 = (i__26997__auto___28168 + (1));
i__26997__auto___28168 = G__28169;
continue;
} else {
}
break;
}

var G__28166 = args28164.length;
switch (G__28166) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28164.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28171 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28171);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28171,ret){
return (function (){
return fn1.call(null,val_28171);
});})(val_28171,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args28172 = [];
var len__26996__auto___28175 = arguments.length;
var i__26997__auto___28176 = (0);
while(true){
if((i__26997__auto___28176 < len__26996__auto___28175)){
args28172.push((arguments[i__26997__auto___28176]));

var G__28177 = (i__26997__auto___28176 + (1));
i__26997__auto___28176 = G__28177;
continue;
} else {
}
break;
}

var G__28174 = args28172.length;
switch (G__28174) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28172.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__26806__auto___28179 = n;
var x_28180 = (0);
while(true){
if((x_28180 < n__26806__auto___28179)){
(a[x_28180] = (0));

var G__28181 = (x_28180 + (1));
x_28180 = G__28181;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28182 = (i + (1));
i = G__28182;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28186 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28186 = (function (flag,meta28187){
this.flag = flag;
this.meta28187 = meta28187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28188,meta28187__$1){
var self__ = this;
var _28188__$1 = this;
return (new cljs.core.async.t_cljs$core$async28186(self__.flag,meta28187__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28186.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28188){
var self__ = this;
var _28188__$1 = this;
return self__.meta28187;
});})(flag))
;

cljs.core.async.t_cljs$core$async28186.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28186.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28186.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28186.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28186.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28187","meta28187",-325171523,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28186.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28186.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28186";

cljs.core.async.t_cljs$core$async28186.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26494__auto__,writer__26495__auto__,opt__26496__auto__){
return cljs.core._write.call(null,writer__26495__auto__,"cljs.core.async/t_cljs$core$async28186");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28186 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28186(flag__$1,meta28187){
return (new cljs.core.async.t_cljs$core$async28186(flag__$1,meta28187));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28186(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28192 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28192 = (function (flag,cb,meta28193){
this.flag = flag;
this.cb = cb;
this.meta28193 = meta28193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28194,meta28193__$1){
var self__ = this;
var _28194__$1 = this;
return (new cljs.core.async.t_cljs$core$async28192(self__.flag,self__.cb,meta28193__$1));
});

cljs.core.async.t_cljs$core$async28192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28194){
var self__ = this;
var _28194__$1 = this;
return self__.meta28193;
});

cljs.core.async.t_cljs$core$async28192.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28192.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28192.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28192.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28192.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28193","meta28193",1769423325,null)], null);
});

cljs.core.async.t_cljs$core$async28192.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28192.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28192";

cljs.core.async.t_cljs$core$async28192.cljs$lang$ctorPrWriter = (function (this__26494__auto__,writer__26495__auto__,opt__26496__auto__){
return cljs.core._write.call(null,writer__26495__auto__,"cljs.core.async/t_cljs$core$async28192");
});

cljs.core.async.__GT_t_cljs$core$async28192 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28192(flag__$1,cb__$1,meta28193){
return (new cljs.core.async.t_cljs$core$async28192(flag__$1,cb__$1,meta28193));
});

}

return (new cljs.core.async.t_cljs$core$async28192(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28195_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28195_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28196_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28196_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25888__auto__ = wport;
if(cljs.core.truth_(or__25888__auto__)){
return or__25888__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28197 = (i + (1));
i = G__28197;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25888__auto__ = ret;
if(cljs.core.truth_(or__25888__auto__)){
return or__25888__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25876__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25876__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25876__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__27003__auto__ = [];
var len__26996__auto___28203 = arguments.length;
var i__26997__auto___28204 = (0);
while(true){
if((i__26997__auto___28204 < len__26996__auto___28203)){
args__27003__auto__.push((arguments[i__26997__auto___28204]));

var G__28205 = (i__26997__auto___28204 + (1));
i__26997__auto___28204 = G__28205;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((1) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27004__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28200){
var map__28201 = p__28200;
var map__28201__$1 = ((((!((map__28201 == null)))?((((map__28201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28201.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28201):map__28201);
var opts = map__28201__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28198){
var G__28199 = cljs.core.first.call(null,seq28198);
var seq28198__$1 = cljs.core.next.call(null,seq28198);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28199,seq28198__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args28206 = [];
var len__26996__auto___28256 = arguments.length;
var i__26997__auto___28257 = (0);
while(true){
if((i__26997__auto___28257 < len__26996__auto___28256)){
args28206.push((arguments[i__26997__auto___28257]));

var G__28258 = (i__26997__auto___28257 + (1));
i__26997__auto___28257 = G__28258;
continue;
} else {
}
break;
}

var G__28208 = args28206.length;
switch (G__28208) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28206.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28093__auto___28260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28093__auto___28260){
return (function (){
var f__28094__auto__ = (function (){var switch__27981__auto__ = ((function (c__28093__auto___28260){
return (function (state_28232){
var state_val_28233 = (state_28232[(1)]);
if((state_val_28233 === (7))){
var inst_28228 = (state_28232[(2)]);
var state_28232__$1 = state_28232;
var statearr_28234_28261 = state_28232__$1;
(statearr_28234_28261[(2)] = inst_28228);

(statearr_28234_28261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28233 === (1))){
var state_28232__$1 = state_28232;
var statearr_28235_28262 = state_28232__$1;
(statearr_28235_28262[(2)] = null);

(statearr_28235_28262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28233 === (4))){
var inst_28211 = (state_28232[(7)]);
var inst_28211__$1 = (state_28232[(2)]);
var inst_28212 = (inst_28211__$1 == null);
var state_28232__$1 = (function (){var statearr_28236 = state_28232;
(statearr_28236[(7)] = inst_28211__$1);

return statearr_28236;
})();
if(cljs.core.truth_(inst_28212)){
var statearr_28237_28263 = state_28232__$1;
(statearr_28237_28263[(1)] = (5));

} else {
var statearr_28238_28264 = state_28232__$1;
(statearr_28238_28264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28233 === (13))){
var state_28232__$1 = state_28232;
var statearr_28239_28265 = state_28232__$1;
(statearr_28239_28265[(2)] = null);

(statearr_28239_28265[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28233 === (6))){
var inst_28211 = (state_28232[(7)]);
var state_28232__$1 = state_28232;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28232__$1,(11),to,inst_28211);
} else {
if((state_val_28233 === (3))){
var inst_28230 = (state_28232[(2)]);
var state_28232__$1 = state_28232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28232__$1,inst_28230);
} else {
if((state_val_28233 === (12))){
var state_28232__$1 = state_28232;
var statearr_28240_28266 = state_28232__$1;
(statearr_28240_28266[(2)] = null);

(statearr_28240_28266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28233 === (2))){
var state_28232__$1 = state_28232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28232__$1,(4),from);
} else {
if((state_val_28233 === (11))){
var inst_28221 = (state_28232[(2)]);
var state_28232__$1 = state_28232;
if(cljs.core.truth_(inst_28221)){
var statearr_28241_28267 = state_28232__$1;
(statearr_28241_28267[(1)] = (12));

} else {
var statearr_28242_28268 = state_28232__$1;
(statearr_28242_28268[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28233 === (9))){
var state_28232__$1 = state_28232;
var statearr_28243_28269 = state_28232__$1;
(statearr_28243_28269[(2)] = null);

(statearr_28243_28269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28233 === (5))){
var state_28232__$1 = state_28232;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28244_28270 = state_28232__$1;
(statearr_28244_28270[(1)] = (8));

} else {
var statearr_28245_28271 = state_28232__$1;
(statearr_28245_28271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28233 === (14))){
var inst_28226 = (state_28232[(2)]);
var state_28232__$1 = state_28232;
var statearr_28246_28272 = state_28232__$1;
(statearr_28246_28272[(2)] = inst_28226);

(statearr_28246_28272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28233 === (10))){
var inst_28218 = (state_28232[(2)]);
var state_28232__$1 = state_28232;
var statearr_28247_28273 = state_28232__$1;
(statearr_28247_28273[(2)] = inst_28218);

(statearr_28247_28273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28233 === (8))){
var inst_28215 = cljs.core.async.close_BANG_.call(null,to);
var state_28232__$1 = state_28232;
var statearr_28248_28274 = state_28232__$1;
(statearr_28248_28274[(2)] = inst_28215);

(statearr_28248_28274[(1)] = (10));


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
});})(c__28093__auto___28260))
;
return ((function (switch__27981__auto__,c__28093__auto___28260){
return (function() {
var cljs$core$async$state_machine__27982__auto__ = null;
var cljs$core$async$state_machine__27982__auto____0 = (function (){
var statearr_28252 = [null,null,null,null,null,null,null,null];
(statearr_28252[(0)] = cljs$core$async$state_machine__27982__auto__);

(statearr_28252[(1)] = (1));

return statearr_28252;
});
var cljs$core$async$state_machine__27982__auto____1 = (function (state_28232){
while(true){
var ret_value__27983__auto__ = (function (){try{while(true){
var result__27984__auto__ = switch__27981__auto__.call(null,state_28232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27984__auto__;
}
break;
}
}catch (e28253){if((e28253 instanceof Object)){
var ex__27985__auto__ = e28253;
var statearr_28254_28275 = state_28232;
(statearr_28254_28275[(5)] = ex__27985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28276 = state_28232;
state_28232 = G__28276;
continue;
} else {
return ret_value__27983__auto__;
}
break;
}
});
cljs$core$async$state_machine__27982__auto__ = function(state_28232){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27982__auto____1.call(this,state_28232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27982__auto____0;
cljs$core$async$state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27982__auto____1;
return cljs$core$async$state_machine__27982__auto__;
})()
;})(switch__27981__auto__,c__28093__auto___28260))
})();
var state__28095__auto__ = (function (){var statearr_28255 = f__28094__auto__.call(null);
(statearr_28255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28093__auto___28260);

return statearr_28255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28095__auto__);
});})(c__28093__auto___28260))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28464){
var vec__28465 = p__28464;
var v = cljs.core.nth.call(null,vec__28465,(0),null);
var p = cljs.core.nth.call(null,vec__28465,(1),null);
var job = vec__28465;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28093__auto___28651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28093__auto___28651,res,vec__28465,v,p,job,jobs,results){
return (function (){
var f__28094__auto__ = (function (){var switch__27981__auto__ = ((function (c__28093__auto___28651,res,vec__28465,v,p,job,jobs,results){
return (function (state_28472){
var state_val_28473 = (state_28472[(1)]);
if((state_val_28473 === (1))){
var state_28472__$1 = state_28472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28472__$1,(2),res,v);
} else {
if((state_val_28473 === (2))){
var inst_28469 = (state_28472[(2)]);
var inst_28470 = cljs.core.async.close_BANG_.call(null,res);
var state_28472__$1 = (function (){var statearr_28474 = state_28472;
(statearr_28474[(7)] = inst_28469);

return statearr_28474;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28472__$1,inst_28470);
} else {
return null;
}
}
});})(c__28093__auto___28651,res,vec__28465,v,p,job,jobs,results))
;
return ((function (switch__27981__auto__,c__28093__auto___28651,res,vec__28465,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27982__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27982__auto____0 = (function (){
var statearr_28478 = [null,null,null,null,null,null,null,null];
(statearr_28478[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27982__auto__);

(statearr_28478[(1)] = (1));

return statearr_28478;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27982__auto____1 = (function (state_28472){
while(true){
var ret_value__27983__auto__ = (function (){try{while(true){
var result__27984__auto__ = switch__27981__auto__.call(null,state_28472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27984__auto__;
}
break;
}
}catch (e28479){if((e28479 instanceof Object)){
var ex__27985__auto__ = e28479;
var statearr_28480_28652 = state_28472;
(statearr_28480_28652[(5)] = ex__27985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28653 = state_28472;
state_28472 = G__28653;
continue;
} else {
return ret_value__27983__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27982__auto__ = function(state_28472){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27982__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27982__auto____1.call(this,state_28472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27982__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27982__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27982__auto__;
})()
;})(switch__27981__auto__,c__28093__auto___28651,res,vec__28465,v,p,job,jobs,results))
})();
var state__28095__auto__ = (function (){var statearr_28481 = f__28094__auto__.call(null);
(statearr_28481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28093__auto___28651);

return statearr_28481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28095__auto__);
});})(c__28093__auto___28651,res,vec__28465,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28482){
var vec__28483 = p__28482;
var v = cljs.core.nth.call(null,vec__28483,(0),null);
var p = cljs.core.nth.call(null,vec__28483,(1),null);
var job = vec__28483;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__26806__auto___28654 = n;
var __28655 = (0);
while(true){
if((__28655 < n__26806__auto___28654)){
var G__28486_28656 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28486_28656) {
case "compute":
var c__28093__auto___28658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28655,c__28093__auto___28658,G__28486_28656,n__26806__auto___28654,jobs,results,process,async){
return (function (){
var f__28094__auto__ = (function (){var switch__27981__auto__ = ((function (__28655,c__28093__auto___28658,G__28486_28656,n__26806__auto___28654,jobs,results,process,async){
return (function (state_28499){
var state_val_28500 = (state_28499[(1)]);
if((state_val_28500 === (1))){
var state_28499__$1 = state_28499;
var statearr_28501_28659 = state_28499__$1;
(statearr_28501_28659[(2)] = null);

(statearr_28501_28659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28500 === (2))){
var state_28499__$1 = state_28499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28499__$1,(4),jobs);
} else {
if((state_val_28500 === (3))){
var inst_28497 = (state_28499[(2)]);
var state_28499__$1 = state_28499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28499__$1,inst_28497);
} else {
if((state_val_28500 === (4))){
var inst_28489 = (state_28499[(2)]);
var inst_28490 = process.call(null,inst_28489);
var state_28499__$1 = state_28499;
if(cljs.core.truth_(inst_28490)){
var statearr_28502_28660 = state_28499__$1;
(statearr_28502_28660[(1)] = (5));

} else {
var statearr_28503_28661 = state_28499__$1;
(statearr_28503_28661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28500 === (5))){
var state_28499__$1 = state_28499;
var statearr_28504_28662 = state_28499__$1;
(statearr_28504_28662[(2)] = null);

(statearr_28504_28662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28500 === (6))){
var state_28499__$1 = state_28499;
var statearr_28505_28663 = state_28499__$1;
(statearr_28505_28663[(2)] = null);

(statearr_28505_28663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28500 === (7))){
var inst_28495 = (state_28499[(2)]);
var state_28499__$1 = state_28499;
var statearr_28506_28664 = state_28499__$1;
(statearr_28506_28664[(2)] = inst_28495);

(statearr_28506_28664[(1)] = (3));


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
});})(__28655,c__28093__auto___28658,G__28486_28656,n__26806__auto___28654,jobs,results,process,async))
;
return ((function (__28655,switch__27981__auto__,c__28093__auto___28658,G__28486_28656,n__26806__auto___28654,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27982__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27982__auto____0 = (function (){
var statearr_28510 = [null,null,null,null,null,null,null];
(statearr_28510[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27982__auto__);

(statearr_28510[(1)] = (1));

return statearr_28510;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27982__auto____1 = (function (state_28499){
while(true){
var ret_value__27983__auto__ = (function (){try{while(true){
var result__27984__auto__ = switch__27981__auto__.call(null,state_28499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27984__auto__;
}
break;
}
}catch (e28511){if((e28511 instanceof Object)){
var ex__27985__auto__ = e28511;
var statearr_28512_28665 = state_28499;
(statearr_28512_28665[(5)] = ex__27985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28666 = state_28499;
state_28499 = G__28666;
continue;
} else {
return ret_value__27983__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27982__auto__ = function(state_28499){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27982__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27982__auto____1.call(this,state_28499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27982__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27982__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27982__auto__;
})()
;})(__28655,switch__27981__auto__,c__28093__auto___28658,G__28486_28656,n__26806__auto___28654,jobs,results,process,async))
})();
var state__28095__auto__ = (function (){var statearr_28513 = f__28094__auto__.call(null);
(statearr_28513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28093__auto___28658);

return statearr_28513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28095__auto__);
});})(__28655,c__28093__auto___28658,G__28486_28656,n__26806__auto___28654,jobs,results,process,async))
);


break;
case "async":
var c__28093__auto___28667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28655,c__28093__auto___28667,G__28486_28656,n__26806__auto___28654,jobs,results,process,async){
return (function (){
var f__28094__auto__ = (function (){var switch__27981__auto__ = ((function (__28655,c__28093__auto___28667,G__28486_28656,n__26806__auto___28654,jobs,results,process,async){
return (function (state_28526){
var state_val_28527 = (state_28526[(1)]);
if((state_val_28527 === (1))){
var state_28526__$1 = state_28526;
var statearr_28528_28668 = state_28526__$1;
(statearr_28528_28668[(2)] = null);

(statearr_28528_28668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28527 === (2))){
var state_28526__$1 = state_28526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28526__$1,(4),jobs);
} else {
if((state_val_28527 === (3))){
var inst_28524 = (state_28526[(2)]);
var state_28526__$1 = state_28526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28526__$1,inst_28524);
} else {
if((state_val_28527 === (4))){
var inst_28516 = (state_28526[(2)]);
var inst_28517 = async.call(null,inst_28516);
var state_28526__$1 = state_28526;
if(cljs.core.truth_(inst_28517)){
var statearr_28529_28669 = state_28526__$1;
(statearr_28529_28669[(1)] = (5));

} else {
var statearr_28530_28670 = state_28526__$1;
(statearr_28530_28670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28527 === (5))){
var state_28526__$1 = state_28526;
var statearr_28531_28671 = state_28526__$1;
(statearr_28531_28671[(2)] = null);

(statearr_28531_28671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28527 === (6))){
var state_28526__$1 = state_28526;
var statearr_28532_28672 = state_28526__$1;
(statearr_28532_28672[(2)] = null);

(statearr_28532_28672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28527 === (7))){
var inst_28522 = (state_28526[(2)]);
var state_28526__$1 = state_28526;
var statearr_28533_28673 = state_28526__$1;
(statearr_28533_28673[(2)] = inst_28522);

(statearr_28533_28673[(1)] = (3));


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
});})(__28655,c__28093__auto___28667,G__28486_28656,n__26806__auto___28654,jobs,results,process,async))
;
return ((function (__28655,switch__27981__auto__,c__28093__auto___28667,G__28486_28656,n__26806__auto___28654,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27982__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27982__auto____0 = (function (){
var statearr_28537 = [null,null,null,null,null,null,null];
(statearr_28537[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27982__auto__);

(statearr_28537[(1)] = (1));

return statearr_28537;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27982__auto____1 = (function (state_28526){
while(true){
var ret_value__27983__auto__ = (function (){try{while(true){
var result__27984__auto__ = switch__27981__auto__.call(null,state_28526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27984__auto__;
}
break;
}
}catch (e28538){if((e28538 instanceof Object)){
var ex__27985__auto__ = e28538;
var statearr_28539_28674 = state_28526;
(statearr_28539_28674[(5)] = ex__27985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28675 = state_28526;
state_28526 = G__28675;
continue;
} else {
return ret_value__27983__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27982__auto__ = function(state_28526){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27982__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27982__auto____1.call(this,state_28526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27982__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27982__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27982__auto__;
})()
;})(__28655,switch__27981__auto__,c__28093__auto___28667,G__28486_28656,n__26806__auto___28654,jobs,results,process,async))
})();
var state__28095__auto__ = (function (){var statearr_28540 = f__28094__auto__.call(null);
(statearr_28540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28093__auto___28667);

return statearr_28540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28095__auto__);
});})(__28655,c__28093__auto___28667,G__28486_28656,n__26806__auto___28654,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28676 = (__28655 + (1));
__28655 = G__28676;
continue;
} else {
}
break;
}

var c__28093__auto___28677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28093__auto___28677,jobs,results,process,async){
return (function (){
var f__28094__auto__ = (function (){var switch__27981__auto__ = ((function (c__28093__auto___28677,jobs,results,process,async){
return (function (state_28562){
var state_val_28563 = (state_28562[(1)]);
if((state_val_28563 === (1))){
var state_28562__$1 = state_28562;
var statearr_28564_28678 = state_28562__$1;
(statearr_28564_28678[(2)] = null);

(statearr_28564_28678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28563 === (2))){
var state_28562__$1 = state_28562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28562__$1,(4),from);
} else {
if((state_val_28563 === (3))){
var inst_28560 = (state_28562[(2)]);
var state_28562__$1 = state_28562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28562__$1,inst_28560);
} else {
if((state_val_28563 === (4))){
var inst_28543 = (state_28562[(7)]);
var inst_28543__$1 = (state_28562[(2)]);
var inst_28544 = (inst_28543__$1 == null);
var state_28562__$1 = (function (){var statearr_28565 = state_28562;
(statearr_28565[(7)] = inst_28543__$1);

return statearr_28565;
})();
if(cljs.core.truth_(inst_28544)){
var statearr_28566_28679 = state_28562__$1;
(statearr_28566_28679[(1)] = (5));

} else {
var statearr_28567_28680 = state_28562__$1;
(statearr_28567_28680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28563 === (5))){
var inst_28546 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28562__$1 = state_28562;
var statearr_28568_28681 = state_28562__$1;
(statearr_28568_28681[(2)] = inst_28546);

(statearr_28568_28681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28563 === (6))){
var inst_28548 = (state_28562[(8)]);
var inst_28543 = (state_28562[(7)]);
var inst_28548__$1 = cljs.core.async.chan.call(null,(1));
var inst_28549 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28550 = [inst_28543,inst_28548__$1];
var inst_28551 = (new cljs.core.PersistentVector(null,2,(5),inst_28549,inst_28550,null));
var state_28562__$1 = (function (){var statearr_28569 = state_28562;
(statearr_28569[(8)] = inst_28548__$1);

return statearr_28569;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28562__$1,(8),jobs,inst_28551);
} else {
if((state_val_28563 === (7))){
var inst_28558 = (state_28562[(2)]);
var state_28562__$1 = state_28562;
var statearr_28570_28682 = state_28562__$1;
(statearr_28570_28682[(2)] = inst_28558);

(statearr_28570_28682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28563 === (8))){
var inst_28548 = (state_28562[(8)]);
var inst_28553 = (state_28562[(2)]);
var state_28562__$1 = (function (){var statearr_28571 = state_28562;
(statearr_28571[(9)] = inst_28553);

return statearr_28571;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28562__$1,(9),results,inst_28548);
} else {
if((state_val_28563 === (9))){
var inst_28555 = (state_28562[(2)]);
var state_28562__$1 = (function (){var statearr_28572 = state_28562;
(statearr_28572[(10)] = inst_28555);

return statearr_28572;
})();
var statearr_28573_28683 = state_28562__$1;
(statearr_28573_28683[(2)] = null);

(statearr_28573_28683[(1)] = (2));


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
});})(c__28093__auto___28677,jobs,results,process,async))
;
return ((function (switch__27981__auto__,c__28093__auto___28677,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27982__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27982__auto____0 = (function (){
var statearr_28577 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28577[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27982__auto__);

(statearr_28577[(1)] = (1));

return statearr_28577;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27982__auto____1 = (function (state_28562){
while(true){
var ret_value__27983__auto__ = (function (){try{while(true){
var result__27984__auto__ = switch__27981__auto__.call(null,state_28562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27984__auto__;
}
break;
}
}catch (e28578){if((e28578 instanceof Object)){
var ex__27985__auto__ = e28578;
var statearr_28579_28684 = state_28562;
(statearr_28579_28684[(5)] = ex__27985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28685 = state_28562;
state_28562 = G__28685;
continue;
} else {
return ret_value__27983__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27982__auto__ = function(state_28562){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27982__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27982__auto____1.call(this,state_28562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27982__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27982__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27982__auto__;
})()
;})(switch__27981__auto__,c__28093__auto___28677,jobs,results,process,async))
})();
var state__28095__auto__ = (function (){var statearr_28580 = f__28094__auto__.call(null);
(statearr_28580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28093__auto___28677);

return statearr_28580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28095__auto__);
});})(c__28093__auto___28677,jobs,results,process,async))
);


var c__28093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28093__auto__,jobs,results,process,async){
return (function (){
var f__28094__auto__ = (function (){var switch__27981__auto__ = ((function (c__28093__auto__,jobs,results,process,async){
return (function (state_28618){
var state_val_28619 = (state_28618[(1)]);
if((state_val_28619 === (7))){
var inst_28614 = (state_28618[(2)]);
var state_28618__$1 = state_28618;
var statearr_28620_28686 = state_28618__$1;
(statearr_28620_28686[(2)] = inst_28614);

(statearr_28620_28686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28619 === (20))){
var state_28618__$1 = state_28618;
var statearr_28621_28687 = state_28618__$1;
(statearr_28621_28687[(2)] = null);

(statearr_28621_28687[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28619 === (1))){
var state_28618__$1 = state_28618;
var statearr_28622_28688 = state_28618__$1;
(statearr_28622_28688[(2)] = null);

(statearr_28622_28688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28619 === (4))){
var inst_28583 = (state_28618[(7)]);
var inst_28583__$1 = (state_28618[(2)]);
var inst_28584 = (inst_28583__$1 == null);
var state_28618__$1 = (function (){var statearr_28623 = state_28618;
(statearr_28623[(7)] = inst_28583__$1);

return statearr_28623;
})();
if(cljs.core.truth_(inst_28584)){
var statearr_28624_28689 = state_28618__$1;
(statearr_28624_28689[(1)] = (5));

} else {
var statearr_28625_28690 = state_28618__$1;
(statearr_28625_28690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28619 === (15))){
var inst_28596 = (state_28618[(8)]);
var state_28618__$1 = state_28618;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28618__$1,(18),to,inst_28596);
} else {
if((state_val_28619 === (21))){
var inst_28609 = (state_28618[(2)]);
var state_28618__$1 = state_28618;
var statearr_28626_28691 = state_28618__$1;
(statearr_28626_28691[(2)] = inst_28609);

(statearr_28626_28691[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28619 === (13))){
var inst_28611 = (state_28618[(2)]);
var state_28618__$1 = (function (){var statearr_28627 = state_28618;
(statearr_28627[(9)] = inst_28611);

return statearr_28627;
})();
var statearr_28628_28692 = state_28618__$1;
(statearr_28628_28692[(2)] = null);

(statearr_28628_28692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28619 === (6))){
var inst_28583 = (state_28618[(7)]);
var state_28618__$1 = state_28618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28618__$1,(11),inst_28583);
} else {
if((state_val_28619 === (17))){
var inst_28604 = (state_28618[(2)]);
var state_28618__$1 = state_28618;
if(cljs.core.truth_(inst_28604)){
var statearr_28629_28693 = state_28618__$1;
(statearr_28629_28693[(1)] = (19));

} else {
var statearr_28630_28694 = state_28618__$1;
(statearr_28630_28694[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28619 === (3))){
var inst_28616 = (state_28618[(2)]);
var state_28618__$1 = state_28618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28618__$1,inst_28616);
} else {
if((state_val_28619 === (12))){
var inst_28593 = (state_28618[(10)]);
var state_28618__$1 = state_28618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28618__$1,(14),inst_28593);
} else {
if((state_val_28619 === (2))){
var state_28618__$1 = state_28618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28618__$1,(4),results);
} else {
if((state_val_28619 === (19))){
var state_28618__$1 = state_28618;
var statearr_28631_28695 = state_28618__$1;
(statearr_28631_28695[(2)] = null);

(statearr_28631_28695[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28619 === (11))){
var inst_28593 = (state_28618[(2)]);
var state_28618__$1 = (function (){var statearr_28632 = state_28618;
(statearr_28632[(10)] = inst_28593);

return statearr_28632;
})();
var statearr_28633_28696 = state_28618__$1;
(statearr_28633_28696[(2)] = null);

(statearr_28633_28696[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28619 === (9))){
var state_28618__$1 = state_28618;
var statearr_28634_28697 = state_28618__$1;
(statearr_28634_28697[(2)] = null);

(statearr_28634_28697[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28619 === (5))){
var state_28618__$1 = state_28618;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28635_28698 = state_28618__$1;
(statearr_28635_28698[(1)] = (8));

} else {
var statearr_28636_28699 = state_28618__$1;
(statearr_28636_28699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28619 === (14))){
var inst_28596 = (state_28618[(8)]);
var inst_28598 = (state_28618[(11)]);
var inst_28596__$1 = (state_28618[(2)]);
var inst_28597 = (inst_28596__$1 == null);
var inst_28598__$1 = cljs.core.not.call(null,inst_28597);
var state_28618__$1 = (function (){var statearr_28637 = state_28618;
(statearr_28637[(8)] = inst_28596__$1);

(statearr_28637[(11)] = inst_28598__$1);

return statearr_28637;
})();
if(inst_28598__$1){
var statearr_28638_28700 = state_28618__$1;
(statearr_28638_28700[(1)] = (15));

} else {
var statearr_28639_28701 = state_28618__$1;
(statearr_28639_28701[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28619 === (16))){
var inst_28598 = (state_28618[(11)]);
var state_28618__$1 = state_28618;
var statearr_28640_28702 = state_28618__$1;
(statearr_28640_28702[(2)] = inst_28598);

(statearr_28640_28702[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28619 === (10))){
var inst_28590 = (state_28618[(2)]);
var state_28618__$1 = state_28618;
var statearr_28641_28703 = state_28618__$1;
(statearr_28641_28703[(2)] = inst_28590);

(statearr_28641_28703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28619 === (18))){
var inst_28601 = (state_28618[(2)]);
var state_28618__$1 = state_28618;
var statearr_28642_28704 = state_28618__$1;
(statearr_28642_28704[(2)] = inst_28601);

(statearr_28642_28704[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28619 === (8))){
var inst_28587 = cljs.core.async.close_BANG_.call(null,to);
var state_28618__$1 = state_28618;
var statearr_28643_28705 = state_28618__$1;
(statearr_28643_28705[(2)] = inst_28587);

(statearr_28643_28705[(1)] = (10));


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
}
}
}
}
});})(c__28093__auto__,jobs,results,process,async))
;
return ((function (switch__27981__auto__,c__28093__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27982__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27982__auto____0 = (function (){
var statearr_28647 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28647[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27982__auto__);

(statearr_28647[(1)] = (1));

return statearr_28647;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27982__auto____1 = (function (state_28618){
while(true){
var ret_value__27983__auto__ = (function (){try{while(true){
var result__27984__auto__ = switch__27981__auto__.call(null,state_28618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27984__auto__;
}
break;
}
}catch (e28648){if((e28648 instanceof Object)){
var ex__27985__auto__ = e28648;
var statearr_28649_28706 = state_28618;
(statearr_28649_28706[(5)] = ex__27985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28707 = state_28618;
state_28618 = G__28707;
continue;
} else {
return ret_value__27983__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27982__auto__ = function(state_28618){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27982__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27982__auto____1.call(this,state_28618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27982__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27982__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27982__auto__;
})()
;})(switch__27981__auto__,c__28093__auto__,jobs,results,process,async))
})();
var state__28095__auto__ = (function (){var statearr_28650 = f__28094__auto__.call(null);
(statearr_28650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28093__auto__);

return statearr_28650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28095__auto__);
});})(c__28093__auto__,jobs,results,process,async))
);

return c__28093__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args28708 = [];
var len__26996__auto___28711 = arguments.length;
var i__26997__auto___28712 = (0);
while(true){
if((i__26997__auto___28712 < len__26996__auto___28711)){
args28708.push((arguments[i__26997__auto___28712]));

var G__28713 = (i__26997__auto___28712 + (1));
i__26997__auto___28712 = G__28713;
continue;
} else {
}
break;
}

var G__28710 = args28708.length;
switch (G__28710) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28708.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args28715 = [];
var len__26996__auto___28718 = arguments.length;
var i__26997__auto___28719 = (0);
while(true){
if((i__26997__auto___28719 < len__26996__auto___28718)){
args28715.push((arguments[i__26997__auto___28719]));

var G__28720 = (i__26997__auto___28719 + (1));
i__26997__auto___28719 = G__28720;
continue;
} else {
}
break;
}

var G__28717 = args28715.length;
switch (G__28717) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28715.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args28722 = [];
var len__26996__auto___28775 = arguments.length;
var i__26997__auto___28776 = (0);
while(true){
if((i__26997__auto___28776 < len__26996__auto___28775)){
args28722.push((arguments[i__26997__auto___28776]));

var G__28777 = (i__26997__auto___28776 + (1));
i__26997__auto___28776 = G__28777;
continue;
} else {
}
break;
}

var G__28724 = args28722.length;
switch (G__28724) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28722.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28093__auto___28779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28093__auto___28779,tc,fc){
return (function (){
var f__28094__auto__ = (function (){var switch__27981__auto__ = ((function (c__28093__auto___28779,tc,fc){
return (function (state_28750){
var state_val_28751 = (state_28750[(1)]);
if((state_val_28751 === (7))){
var inst_28746 = (state_28750[(2)]);
var state_28750__$1 = state_28750;
var statearr_28752_28780 = state_28750__$1;
(statearr_28752_28780[(2)] = inst_28746);

(statearr_28752_28780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28751 === (1))){
var state_28750__$1 = state_28750;
var statearr_28753_28781 = state_28750__$1;
(statearr_28753_28781[(2)] = null);

(statearr_28753_28781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28751 === (4))){
var inst_28727 = (state_28750[(7)]);
var inst_28727__$1 = (state_28750[(2)]);
var inst_28728 = (inst_28727__$1 == null);
var state_28750__$1 = (function (){var statearr_28754 = state_28750;
(statearr_28754[(7)] = inst_28727__$1);

return statearr_28754;
})();
if(cljs.core.truth_(inst_28728)){
var statearr_28755_28782 = state_28750__$1;
(statearr_28755_28782[(1)] = (5));

} else {
var statearr_28756_28783 = state_28750__$1;
(statearr_28756_28783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28751 === (13))){
var state_28750__$1 = state_28750;
var statearr_28757_28784 = state_28750__$1;
(statearr_28757_28784[(2)] = null);

(statearr_28757_28784[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28751 === (6))){
var inst_28727 = (state_28750[(7)]);
var inst_28733 = p.call(null,inst_28727);
var state_28750__$1 = state_28750;
if(cljs.core.truth_(inst_28733)){
var statearr_28758_28785 = state_28750__$1;
(statearr_28758_28785[(1)] = (9));

} else {
var statearr_28759_28786 = state_28750__$1;
(statearr_28759_28786[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28751 === (3))){
var inst_28748 = (state_28750[(2)]);
var state_28750__$1 = state_28750;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28750__$1,inst_28748);
} else {
if((state_val_28751 === (12))){
var state_28750__$1 = state_28750;
var statearr_28760_28787 = state_28750__$1;
(statearr_28760_28787[(2)] = null);

(statearr_28760_28787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28751 === (2))){
var state_28750__$1 = state_28750;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28750__$1,(4),ch);
} else {
if((state_val_28751 === (11))){
var inst_28727 = (state_28750[(7)]);
var inst_28737 = (state_28750[(2)]);
var state_28750__$1 = state_28750;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28750__$1,(8),inst_28737,inst_28727);
} else {
if((state_val_28751 === (9))){
var state_28750__$1 = state_28750;
var statearr_28761_28788 = state_28750__$1;
(statearr_28761_28788[(2)] = tc);

(statearr_28761_28788[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28751 === (5))){
var inst_28730 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28731 = cljs.core.async.close_BANG_.call(null,fc);
var state_28750__$1 = (function (){var statearr_28762 = state_28750;
(statearr_28762[(8)] = inst_28730);

return statearr_28762;
})();
var statearr_28763_28789 = state_28750__$1;
(statearr_28763_28789[(2)] = inst_28731);

(statearr_28763_28789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28751 === (14))){
var inst_28744 = (state_28750[(2)]);
var state_28750__$1 = state_28750;
var statearr_28764_28790 = state_28750__$1;
(statearr_28764_28790[(2)] = inst_28744);

(statearr_28764_28790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28751 === (10))){
var state_28750__$1 = state_28750;
var statearr_28765_28791 = state_28750__$1;
(statearr_28765_28791[(2)] = fc);

(statearr_28765_28791[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28751 === (8))){
var inst_28739 = (state_28750[(2)]);
var state_28750__$1 = state_28750;
if(cljs.core.truth_(inst_28739)){
var statearr_28766_28792 = state_28750__$1;
(statearr_28766_28792[(1)] = (12));

} else {
var statearr_28767_28793 = state_28750__$1;
(statearr_28767_28793[(1)] = (13));

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
});})(c__28093__auto___28779,tc,fc))
;
return ((function (switch__27981__auto__,c__28093__auto___28779,tc,fc){
return (function() {
var cljs$core$async$state_machine__27982__auto__ = null;
var cljs$core$async$state_machine__27982__auto____0 = (function (){
var statearr_28771 = [null,null,null,null,null,null,null,null,null];
(statearr_28771[(0)] = cljs$core$async$state_machine__27982__auto__);

(statearr_28771[(1)] = (1));

return statearr_28771;
});
var cljs$core$async$state_machine__27982__auto____1 = (function (state_28750){
while(true){
var ret_value__27983__auto__ = (function (){try{while(true){
var result__27984__auto__ = switch__27981__auto__.call(null,state_28750);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27984__auto__;
}
break;
}
}catch (e28772){if((e28772 instanceof Object)){
var ex__27985__auto__ = e28772;
var statearr_28773_28794 = state_28750;
(statearr_28773_28794[(5)] = ex__27985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28795 = state_28750;
state_28750 = G__28795;
continue;
} else {
return ret_value__27983__auto__;
}
break;
}
});
cljs$core$async$state_machine__27982__auto__ = function(state_28750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27982__auto____1.call(this,state_28750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27982__auto____0;
cljs$core$async$state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27982__auto____1;
return cljs$core$async$state_machine__27982__auto__;
})()
;})(switch__27981__auto__,c__28093__auto___28779,tc,fc))
})();
var state__28095__auto__ = (function (){var statearr_28774 = f__28094__auto__.call(null);
(statearr_28774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28093__auto___28779);

return statearr_28774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28095__auto__);
});})(c__28093__auto___28779,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28093__auto__){
return (function (){
var f__28094__auto__ = (function (){var switch__27981__auto__ = ((function (c__28093__auto__){
return (function (state_28859){
var state_val_28860 = (state_28859[(1)]);
if((state_val_28860 === (7))){
var inst_28855 = (state_28859[(2)]);
var state_28859__$1 = state_28859;
var statearr_28861_28882 = state_28859__$1;
(statearr_28861_28882[(2)] = inst_28855);

(statearr_28861_28882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (1))){
var inst_28839 = init;
var state_28859__$1 = (function (){var statearr_28862 = state_28859;
(statearr_28862[(7)] = inst_28839);

return statearr_28862;
})();
var statearr_28863_28883 = state_28859__$1;
(statearr_28863_28883[(2)] = null);

(statearr_28863_28883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (4))){
var inst_28842 = (state_28859[(8)]);
var inst_28842__$1 = (state_28859[(2)]);
var inst_28843 = (inst_28842__$1 == null);
var state_28859__$1 = (function (){var statearr_28864 = state_28859;
(statearr_28864[(8)] = inst_28842__$1);

return statearr_28864;
})();
if(cljs.core.truth_(inst_28843)){
var statearr_28865_28884 = state_28859__$1;
(statearr_28865_28884[(1)] = (5));

} else {
var statearr_28866_28885 = state_28859__$1;
(statearr_28866_28885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (6))){
var inst_28842 = (state_28859[(8)]);
var inst_28839 = (state_28859[(7)]);
var inst_28846 = (state_28859[(9)]);
var inst_28846__$1 = f.call(null,inst_28839,inst_28842);
var inst_28847 = cljs.core.reduced_QMARK_.call(null,inst_28846__$1);
var state_28859__$1 = (function (){var statearr_28867 = state_28859;
(statearr_28867[(9)] = inst_28846__$1);

return statearr_28867;
})();
if(inst_28847){
var statearr_28868_28886 = state_28859__$1;
(statearr_28868_28886[(1)] = (8));

} else {
var statearr_28869_28887 = state_28859__$1;
(statearr_28869_28887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (3))){
var inst_28857 = (state_28859[(2)]);
var state_28859__$1 = state_28859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28859__$1,inst_28857);
} else {
if((state_val_28860 === (2))){
var state_28859__$1 = state_28859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28859__$1,(4),ch);
} else {
if((state_val_28860 === (9))){
var inst_28846 = (state_28859[(9)]);
var inst_28839 = inst_28846;
var state_28859__$1 = (function (){var statearr_28870 = state_28859;
(statearr_28870[(7)] = inst_28839);

return statearr_28870;
})();
var statearr_28871_28888 = state_28859__$1;
(statearr_28871_28888[(2)] = null);

(statearr_28871_28888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (5))){
var inst_28839 = (state_28859[(7)]);
var state_28859__$1 = state_28859;
var statearr_28872_28889 = state_28859__$1;
(statearr_28872_28889[(2)] = inst_28839);

(statearr_28872_28889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (10))){
var inst_28853 = (state_28859[(2)]);
var state_28859__$1 = state_28859;
var statearr_28873_28890 = state_28859__$1;
(statearr_28873_28890[(2)] = inst_28853);

(statearr_28873_28890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28860 === (8))){
var inst_28846 = (state_28859[(9)]);
var inst_28849 = cljs.core.deref.call(null,inst_28846);
var state_28859__$1 = state_28859;
var statearr_28874_28891 = state_28859__$1;
(statearr_28874_28891[(2)] = inst_28849);

(statearr_28874_28891[(1)] = (10));


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
});})(c__28093__auto__))
;
return ((function (switch__27981__auto__,c__28093__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27982__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27982__auto____0 = (function (){
var statearr_28878 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28878[(0)] = cljs$core$async$reduce_$_state_machine__27982__auto__);

(statearr_28878[(1)] = (1));

return statearr_28878;
});
var cljs$core$async$reduce_$_state_machine__27982__auto____1 = (function (state_28859){
while(true){
var ret_value__27983__auto__ = (function (){try{while(true){
var result__27984__auto__ = switch__27981__auto__.call(null,state_28859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27984__auto__;
}
break;
}
}catch (e28879){if((e28879 instanceof Object)){
var ex__27985__auto__ = e28879;
var statearr_28880_28892 = state_28859;
(statearr_28880_28892[(5)] = ex__27985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28893 = state_28859;
state_28859 = G__28893;
continue;
} else {
return ret_value__27983__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27982__auto__ = function(state_28859){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27982__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27982__auto____1.call(this,state_28859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27982__auto____0;
cljs$core$async$reduce_$_state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27982__auto____1;
return cljs$core$async$reduce_$_state_machine__27982__auto__;
})()
;})(switch__27981__auto__,c__28093__auto__))
})();
var state__28095__auto__ = (function (){var statearr_28881 = f__28094__auto__.call(null);
(statearr_28881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28093__auto__);

return statearr_28881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28095__auto__);
});})(c__28093__auto__))
);

return c__28093__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args28894 = [];
var len__26996__auto___28946 = arguments.length;
var i__26997__auto___28947 = (0);
while(true){
if((i__26997__auto___28947 < len__26996__auto___28946)){
args28894.push((arguments[i__26997__auto___28947]));

var G__28948 = (i__26997__auto___28947 + (1));
i__26997__auto___28947 = G__28948;
continue;
} else {
}
break;
}

var G__28896 = args28894.length;
switch (G__28896) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28894.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28093__auto__){
return (function (){
var f__28094__auto__ = (function (){var switch__27981__auto__ = ((function (c__28093__auto__){
return (function (state_28921){
var state_val_28922 = (state_28921[(1)]);
if((state_val_28922 === (7))){
var inst_28903 = (state_28921[(2)]);
var state_28921__$1 = state_28921;
var statearr_28923_28950 = state_28921__$1;
(statearr_28923_28950[(2)] = inst_28903);

(statearr_28923_28950[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28922 === (1))){
var inst_28897 = cljs.core.seq.call(null,coll);
var inst_28898 = inst_28897;
var state_28921__$1 = (function (){var statearr_28924 = state_28921;
(statearr_28924[(7)] = inst_28898);

return statearr_28924;
})();
var statearr_28925_28951 = state_28921__$1;
(statearr_28925_28951[(2)] = null);

(statearr_28925_28951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28922 === (4))){
var inst_28898 = (state_28921[(7)]);
var inst_28901 = cljs.core.first.call(null,inst_28898);
var state_28921__$1 = state_28921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28921__$1,(7),ch,inst_28901);
} else {
if((state_val_28922 === (13))){
var inst_28915 = (state_28921[(2)]);
var state_28921__$1 = state_28921;
var statearr_28926_28952 = state_28921__$1;
(statearr_28926_28952[(2)] = inst_28915);

(statearr_28926_28952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28922 === (6))){
var inst_28906 = (state_28921[(2)]);
var state_28921__$1 = state_28921;
if(cljs.core.truth_(inst_28906)){
var statearr_28927_28953 = state_28921__$1;
(statearr_28927_28953[(1)] = (8));

} else {
var statearr_28928_28954 = state_28921__$1;
(statearr_28928_28954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28922 === (3))){
var inst_28919 = (state_28921[(2)]);
var state_28921__$1 = state_28921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28921__$1,inst_28919);
} else {
if((state_val_28922 === (12))){
var state_28921__$1 = state_28921;
var statearr_28929_28955 = state_28921__$1;
(statearr_28929_28955[(2)] = null);

(statearr_28929_28955[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28922 === (2))){
var inst_28898 = (state_28921[(7)]);
var state_28921__$1 = state_28921;
if(cljs.core.truth_(inst_28898)){
var statearr_28930_28956 = state_28921__$1;
(statearr_28930_28956[(1)] = (4));

} else {
var statearr_28931_28957 = state_28921__$1;
(statearr_28931_28957[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28922 === (11))){
var inst_28912 = cljs.core.async.close_BANG_.call(null,ch);
var state_28921__$1 = state_28921;
var statearr_28932_28958 = state_28921__$1;
(statearr_28932_28958[(2)] = inst_28912);

(statearr_28932_28958[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28922 === (9))){
var state_28921__$1 = state_28921;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28933_28959 = state_28921__$1;
(statearr_28933_28959[(1)] = (11));

} else {
var statearr_28934_28960 = state_28921__$1;
(statearr_28934_28960[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28922 === (5))){
var inst_28898 = (state_28921[(7)]);
var state_28921__$1 = state_28921;
var statearr_28935_28961 = state_28921__$1;
(statearr_28935_28961[(2)] = inst_28898);

(statearr_28935_28961[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28922 === (10))){
var inst_28917 = (state_28921[(2)]);
var state_28921__$1 = state_28921;
var statearr_28936_28962 = state_28921__$1;
(statearr_28936_28962[(2)] = inst_28917);

(statearr_28936_28962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28922 === (8))){
var inst_28898 = (state_28921[(7)]);
var inst_28908 = cljs.core.next.call(null,inst_28898);
var inst_28898__$1 = inst_28908;
var state_28921__$1 = (function (){var statearr_28937 = state_28921;
(statearr_28937[(7)] = inst_28898__$1);

return statearr_28937;
})();
var statearr_28938_28963 = state_28921__$1;
(statearr_28938_28963[(2)] = null);

(statearr_28938_28963[(1)] = (2));


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
});})(c__28093__auto__))
;
return ((function (switch__27981__auto__,c__28093__auto__){
return (function() {
var cljs$core$async$state_machine__27982__auto__ = null;
var cljs$core$async$state_machine__27982__auto____0 = (function (){
var statearr_28942 = [null,null,null,null,null,null,null,null];
(statearr_28942[(0)] = cljs$core$async$state_machine__27982__auto__);

(statearr_28942[(1)] = (1));

return statearr_28942;
});
var cljs$core$async$state_machine__27982__auto____1 = (function (state_28921){
while(true){
var ret_value__27983__auto__ = (function (){try{while(true){
var result__27984__auto__ = switch__27981__auto__.call(null,state_28921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27984__auto__;
}
break;
}
}catch (e28943){if((e28943 instanceof Object)){
var ex__27985__auto__ = e28943;
var statearr_28944_28964 = state_28921;
(statearr_28944_28964[(5)] = ex__27985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28965 = state_28921;
state_28921 = G__28965;
continue;
} else {
return ret_value__27983__auto__;
}
break;
}
});
cljs$core$async$state_machine__27982__auto__ = function(state_28921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27982__auto____1.call(this,state_28921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27982__auto____0;
cljs$core$async$state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27982__auto____1;
return cljs$core$async$state_machine__27982__auto__;
})()
;})(switch__27981__auto__,c__28093__auto__))
})();
var state__28095__auto__ = (function (){var statearr_28945 = f__28094__auto__.call(null);
(statearr_28945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28093__auto__);

return statearr_28945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28095__auto__);
});})(c__28093__auto__))
);

return c__28093__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__26551__auto__ = (((_ == null))?null:_);
var m__26552__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__26551__auto__)]);
if(!((m__26552__auto__ == null))){
return m__26552__auto__.call(null,_);
} else {
var m__26552__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__26552__auto____$1 == null))){
return m__26552__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__26551__auto__ = (((m == null))?null:m);
var m__26552__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__26551__auto__)]);
if(!((m__26552__auto__ == null))){
return m__26552__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__26552__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__26552__auto____$1 == null))){
return m__26552__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__26551__auto__ = (((m == null))?null:m);
var m__26552__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__26551__auto__)]);
if(!((m__26552__auto__ == null))){
return m__26552__auto__.call(null,m,ch);
} else {
var m__26552__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__26552__auto____$1 == null))){
return m__26552__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__26551__auto__ = (((m == null))?null:m);
var m__26552__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__26551__auto__)]);
if(!((m__26552__auto__ == null))){
return m__26552__auto__.call(null,m);
} else {
var m__26552__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__26552__auto____$1 == null))){
return m__26552__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29191 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29191 = (function (ch,cs,meta29192){
this.ch = ch;
this.cs = cs;
this.meta29192 = meta29192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29193,meta29192__$1){
var self__ = this;
var _29193__$1 = this;
return (new cljs.core.async.t_cljs$core$async29191(self__.ch,self__.cs,meta29192__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29191.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29193){
var self__ = this;
var _29193__$1 = this;
return self__.meta29192;
});})(cs))
;

cljs.core.async.t_cljs$core$async29191.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29191.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29191.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29191.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29191.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29191.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29191.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29192","meta29192",1196159859,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29191.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29191";

cljs.core.async.t_cljs$core$async29191.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26494__auto__,writer__26495__auto__,opt__26496__auto__){
return cljs.core._write.call(null,writer__26495__auto__,"cljs.core.async/t_cljs$core$async29191");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29191 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29191(ch__$1,cs__$1,meta29192){
return (new cljs.core.async.t_cljs$core$async29191(ch__$1,cs__$1,meta29192));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29191(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28093__auto___29416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28093__auto___29416,cs,m,dchan,dctr,done){
return (function (){
var f__28094__auto__ = (function (){var switch__27981__auto__ = ((function (c__28093__auto___29416,cs,m,dchan,dctr,done){
return (function (state_29328){
var state_val_29329 = (state_29328[(1)]);
if((state_val_29329 === (7))){
var inst_29324 = (state_29328[(2)]);
var state_29328__$1 = state_29328;
var statearr_29330_29417 = state_29328__$1;
(statearr_29330_29417[(2)] = inst_29324);

(statearr_29330_29417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (20))){
var inst_29227 = (state_29328[(7)]);
var inst_29239 = cljs.core.first.call(null,inst_29227);
var inst_29240 = cljs.core.nth.call(null,inst_29239,(0),null);
var inst_29241 = cljs.core.nth.call(null,inst_29239,(1),null);
var state_29328__$1 = (function (){var statearr_29331 = state_29328;
(statearr_29331[(8)] = inst_29240);

return statearr_29331;
})();
if(cljs.core.truth_(inst_29241)){
var statearr_29332_29418 = state_29328__$1;
(statearr_29332_29418[(1)] = (22));

} else {
var statearr_29333_29419 = state_29328__$1;
(statearr_29333_29419[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (27))){
var inst_29271 = (state_29328[(9)]);
var inst_29276 = (state_29328[(10)]);
var inst_29196 = (state_29328[(11)]);
var inst_29269 = (state_29328[(12)]);
var inst_29276__$1 = cljs.core._nth.call(null,inst_29269,inst_29271);
var inst_29277 = cljs.core.async.put_BANG_.call(null,inst_29276__$1,inst_29196,done);
var state_29328__$1 = (function (){var statearr_29334 = state_29328;
(statearr_29334[(10)] = inst_29276__$1);

return statearr_29334;
})();
if(cljs.core.truth_(inst_29277)){
var statearr_29335_29420 = state_29328__$1;
(statearr_29335_29420[(1)] = (30));

} else {
var statearr_29336_29421 = state_29328__$1;
(statearr_29336_29421[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (1))){
var state_29328__$1 = state_29328;
var statearr_29337_29422 = state_29328__$1;
(statearr_29337_29422[(2)] = null);

(statearr_29337_29422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (24))){
var inst_29227 = (state_29328[(7)]);
var inst_29246 = (state_29328[(2)]);
var inst_29247 = cljs.core.next.call(null,inst_29227);
var inst_29205 = inst_29247;
var inst_29206 = null;
var inst_29207 = (0);
var inst_29208 = (0);
var state_29328__$1 = (function (){var statearr_29338 = state_29328;
(statearr_29338[(13)] = inst_29207);

(statearr_29338[(14)] = inst_29246);

(statearr_29338[(15)] = inst_29206);

(statearr_29338[(16)] = inst_29205);

(statearr_29338[(17)] = inst_29208);

return statearr_29338;
})();
var statearr_29339_29423 = state_29328__$1;
(statearr_29339_29423[(2)] = null);

(statearr_29339_29423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (39))){
var state_29328__$1 = state_29328;
var statearr_29343_29424 = state_29328__$1;
(statearr_29343_29424[(2)] = null);

(statearr_29343_29424[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (4))){
var inst_29196 = (state_29328[(11)]);
var inst_29196__$1 = (state_29328[(2)]);
var inst_29197 = (inst_29196__$1 == null);
var state_29328__$1 = (function (){var statearr_29344 = state_29328;
(statearr_29344[(11)] = inst_29196__$1);

return statearr_29344;
})();
if(cljs.core.truth_(inst_29197)){
var statearr_29345_29425 = state_29328__$1;
(statearr_29345_29425[(1)] = (5));

} else {
var statearr_29346_29426 = state_29328__$1;
(statearr_29346_29426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (15))){
var inst_29207 = (state_29328[(13)]);
var inst_29206 = (state_29328[(15)]);
var inst_29205 = (state_29328[(16)]);
var inst_29208 = (state_29328[(17)]);
var inst_29223 = (state_29328[(2)]);
var inst_29224 = (inst_29208 + (1));
var tmp29340 = inst_29207;
var tmp29341 = inst_29206;
var tmp29342 = inst_29205;
var inst_29205__$1 = tmp29342;
var inst_29206__$1 = tmp29341;
var inst_29207__$1 = tmp29340;
var inst_29208__$1 = inst_29224;
var state_29328__$1 = (function (){var statearr_29347 = state_29328;
(statearr_29347[(18)] = inst_29223);

(statearr_29347[(13)] = inst_29207__$1);

(statearr_29347[(15)] = inst_29206__$1);

(statearr_29347[(16)] = inst_29205__$1);

(statearr_29347[(17)] = inst_29208__$1);

return statearr_29347;
})();
var statearr_29348_29427 = state_29328__$1;
(statearr_29348_29427[(2)] = null);

(statearr_29348_29427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (21))){
var inst_29250 = (state_29328[(2)]);
var state_29328__$1 = state_29328;
var statearr_29352_29428 = state_29328__$1;
(statearr_29352_29428[(2)] = inst_29250);

(statearr_29352_29428[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (31))){
var inst_29276 = (state_29328[(10)]);
var inst_29280 = done.call(null,null);
var inst_29281 = cljs.core.async.untap_STAR_.call(null,m,inst_29276);
var state_29328__$1 = (function (){var statearr_29353 = state_29328;
(statearr_29353[(19)] = inst_29280);

return statearr_29353;
})();
var statearr_29354_29429 = state_29328__$1;
(statearr_29354_29429[(2)] = inst_29281);

(statearr_29354_29429[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (32))){
var inst_29271 = (state_29328[(9)]);
var inst_29270 = (state_29328[(20)]);
var inst_29269 = (state_29328[(12)]);
var inst_29268 = (state_29328[(21)]);
var inst_29283 = (state_29328[(2)]);
var inst_29284 = (inst_29271 + (1));
var tmp29349 = inst_29270;
var tmp29350 = inst_29269;
var tmp29351 = inst_29268;
var inst_29268__$1 = tmp29351;
var inst_29269__$1 = tmp29350;
var inst_29270__$1 = tmp29349;
var inst_29271__$1 = inst_29284;
var state_29328__$1 = (function (){var statearr_29355 = state_29328;
(statearr_29355[(22)] = inst_29283);

(statearr_29355[(9)] = inst_29271__$1);

(statearr_29355[(20)] = inst_29270__$1);

(statearr_29355[(12)] = inst_29269__$1);

(statearr_29355[(21)] = inst_29268__$1);

return statearr_29355;
})();
var statearr_29356_29430 = state_29328__$1;
(statearr_29356_29430[(2)] = null);

(statearr_29356_29430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (40))){
var inst_29296 = (state_29328[(23)]);
var inst_29300 = done.call(null,null);
var inst_29301 = cljs.core.async.untap_STAR_.call(null,m,inst_29296);
var state_29328__$1 = (function (){var statearr_29357 = state_29328;
(statearr_29357[(24)] = inst_29300);

return statearr_29357;
})();
var statearr_29358_29431 = state_29328__$1;
(statearr_29358_29431[(2)] = inst_29301);

(statearr_29358_29431[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (33))){
var inst_29287 = (state_29328[(25)]);
var inst_29289 = cljs.core.chunked_seq_QMARK_.call(null,inst_29287);
var state_29328__$1 = state_29328;
if(inst_29289){
var statearr_29359_29432 = state_29328__$1;
(statearr_29359_29432[(1)] = (36));

} else {
var statearr_29360_29433 = state_29328__$1;
(statearr_29360_29433[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (13))){
var inst_29217 = (state_29328[(26)]);
var inst_29220 = cljs.core.async.close_BANG_.call(null,inst_29217);
var state_29328__$1 = state_29328;
var statearr_29361_29434 = state_29328__$1;
(statearr_29361_29434[(2)] = inst_29220);

(statearr_29361_29434[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (22))){
var inst_29240 = (state_29328[(8)]);
var inst_29243 = cljs.core.async.close_BANG_.call(null,inst_29240);
var state_29328__$1 = state_29328;
var statearr_29362_29435 = state_29328__$1;
(statearr_29362_29435[(2)] = inst_29243);

(statearr_29362_29435[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (36))){
var inst_29287 = (state_29328[(25)]);
var inst_29291 = cljs.core.chunk_first.call(null,inst_29287);
var inst_29292 = cljs.core.chunk_rest.call(null,inst_29287);
var inst_29293 = cljs.core.count.call(null,inst_29291);
var inst_29268 = inst_29292;
var inst_29269 = inst_29291;
var inst_29270 = inst_29293;
var inst_29271 = (0);
var state_29328__$1 = (function (){var statearr_29363 = state_29328;
(statearr_29363[(9)] = inst_29271);

(statearr_29363[(20)] = inst_29270);

(statearr_29363[(12)] = inst_29269);

(statearr_29363[(21)] = inst_29268);

return statearr_29363;
})();
var statearr_29364_29436 = state_29328__$1;
(statearr_29364_29436[(2)] = null);

(statearr_29364_29436[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (41))){
var inst_29287 = (state_29328[(25)]);
var inst_29303 = (state_29328[(2)]);
var inst_29304 = cljs.core.next.call(null,inst_29287);
var inst_29268 = inst_29304;
var inst_29269 = null;
var inst_29270 = (0);
var inst_29271 = (0);
var state_29328__$1 = (function (){var statearr_29365 = state_29328;
(statearr_29365[(27)] = inst_29303);

(statearr_29365[(9)] = inst_29271);

(statearr_29365[(20)] = inst_29270);

(statearr_29365[(12)] = inst_29269);

(statearr_29365[(21)] = inst_29268);

return statearr_29365;
})();
var statearr_29366_29437 = state_29328__$1;
(statearr_29366_29437[(2)] = null);

(statearr_29366_29437[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (43))){
var state_29328__$1 = state_29328;
var statearr_29367_29438 = state_29328__$1;
(statearr_29367_29438[(2)] = null);

(statearr_29367_29438[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (29))){
var inst_29312 = (state_29328[(2)]);
var state_29328__$1 = state_29328;
var statearr_29368_29439 = state_29328__$1;
(statearr_29368_29439[(2)] = inst_29312);

(statearr_29368_29439[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (44))){
var inst_29321 = (state_29328[(2)]);
var state_29328__$1 = (function (){var statearr_29369 = state_29328;
(statearr_29369[(28)] = inst_29321);

return statearr_29369;
})();
var statearr_29370_29440 = state_29328__$1;
(statearr_29370_29440[(2)] = null);

(statearr_29370_29440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (6))){
var inst_29260 = (state_29328[(29)]);
var inst_29259 = cljs.core.deref.call(null,cs);
var inst_29260__$1 = cljs.core.keys.call(null,inst_29259);
var inst_29261 = cljs.core.count.call(null,inst_29260__$1);
var inst_29262 = cljs.core.reset_BANG_.call(null,dctr,inst_29261);
var inst_29267 = cljs.core.seq.call(null,inst_29260__$1);
var inst_29268 = inst_29267;
var inst_29269 = null;
var inst_29270 = (0);
var inst_29271 = (0);
var state_29328__$1 = (function (){var statearr_29371 = state_29328;
(statearr_29371[(30)] = inst_29262);

(statearr_29371[(29)] = inst_29260__$1);

(statearr_29371[(9)] = inst_29271);

(statearr_29371[(20)] = inst_29270);

(statearr_29371[(12)] = inst_29269);

(statearr_29371[(21)] = inst_29268);

return statearr_29371;
})();
var statearr_29372_29441 = state_29328__$1;
(statearr_29372_29441[(2)] = null);

(statearr_29372_29441[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (28))){
var inst_29287 = (state_29328[(25)]);
var inst_29268 = (state_29328[(21)]);
var inst_29287__$1 = cljs.core.seq.call(null,inst_29268);
var state_29328__$1 = (function (){var statearr_29373 = state_29328;
(statearr_29373[(25)] = inst_29287__$1);

return statearr_29373;
})();
if(inst_29287__$1){
var statearr_29374_29442 = state_29328__$1;
(statearr_29374_29442[(1)] = (33));

} else {
var statearr_29375_29443 = state_29328__$1;
(statearr_29375_29443[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (25))){
var inst_29271 = (state_29328[(9)]);
var inst_29270 = (state_29328[(20)]);
var inst_29273 = (inst_29271 < inst_29270);
var inst_29274 = inst_29273;
var state_29328__$1 = state_29328;
if(cljs.core.truth_(inst_29274)){
var statearr_29376_29444 = state_29328__$1;
(statearr_29376_29444[(1)] = (27));

} else {
var statearr_29377_29445 = state_29328__$1;
(statearr_29377_29445[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (34))){
var state_29328__$1 = state_29328;
var statearr_29378_29446 = state_29328__$1;
(statearr_29378_29446[(2)] = null);

(statearr_29378_29446[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (17))){
var state_29328__$1 = state_29328;
var statearr_29379_29447 = state_29328__$1;
(statearr_29379_29447[(2)] = null);

(statearr_29379_29447[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (3))){
var inst_29326 = (state_29328[(2)]);
var state_29328__$1 = state_29328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29328__$1,inst_29326);
} else {
if((state_val_29329 === (12))){
var inst_29255 = (state_29328[(2)]);
var state_29328__$1 = state_29328;
var statearr_29380_29448 = state_29328__$1;
(statearr_29380_29448[(2)] = inst_29255);

(statearr_29380_29448[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (2))){
var state_29328__$1 = state_29328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29328__$1,(4),ch);
} else {
if((state_val_29329 === (23))){
var state_29328__$1 = state_29328;
var statearr_29381_29449 = state_29328__$1;
(statearr_29381_29449[(2)] = null);

(statearr_29381_29449[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (35))){
var inst_29310 = (state_29328[(2)]);
var state_29328__$1 = state_29328;
var statearr_29382_29450 = state_29328__$1;
(statearr_29382_29450[(2)] = inst_29310);

(statearr_29382_29450[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (19))){
var inst_29227 = (state_29328[(7)]);
var inst_29231 = cljs.core.chunk_first.call(null,inst_29227);
var inst_29232 = cljs.core.chunk_rest.call(null,inst_29227);
var inst_29233 = cljs.core.count.call(null,inst_29231);
var inst_29205 = inst_29232;
var inst_29206 = inst_29231;
var inst_29207 = inst_29233;
var inst_29208 = (0);
var state_29328__$1 = (function (){var statearr_29383 = state_29328;
(statearr_29383[(13)] = inst_29207);

(statearr_29383[(15)] = inst_29206);

(statearr_29383[(16)] = inst_29205);

(statearr_29383[(17)] = inst_29208);

return statearr_29383;
})();
var statearr_29384_29451 = state_29328__$1;
(statearr_29384_29451[(2)] = null);

(statearr_29384_29451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (11))){
var inst_29227 = (state_29328[(7)]);
var inst_29205 = (state_29328[(16)]);
var inst_29227__$1 = cljs.core.seq.call(null,inst_29205);
var state_29328__$1 = (function (){var statearr_29385 = state_29328;
(statearr_29385[(7)] = inst_29227__$1);

return statearr_29385;
})();
if(inst_29227__$1){
var statearr_29386_29452 = state_29328__$1;
(statearr_29386_29452[(1)] = (16));

} else {
var statearr_29387_29453 = state_29328__$1;
(statearr_29387_29453[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (9))){
var inst_29257 = (state_29328[(2)]);
var state_29328__$1 = state_29328;
var statearr_29388_29454 = state_29328__$1;
(statearr_29388_29454[(2)] = inst_29257);

(statearr_29388_29454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (5))){
var inst_29203 = cljs.core.deref.call(null,cs);
var inst_29204 = cljs.core.seq.call(null,inst_29203);
var inst_29205 = inst_29204;
var inst_29206 = null;
var inst_29207 = (0);
var inst_29208 = (0);
var state_29328__$1 = (function (){var statearr_29389 = state_29328;
(statearr_29389[(13)] = inst_29207);

(statearr_29389[(15)] = inst_29206);

(statearr_29389[(16)] = inst_29205);

(statearr_29389[(17)] = inst_29208);

return statearr_29389;
})();
var statearr_29390_29455 = state_29328__$1;
(statearr_29390_29455[(2)] = null);

(statearr_29390_29455[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (14))){
var state_29328__$1 = state_29328;
var statearr_29391_29456 = state_29328__$1;
(statearr_29391_29456[(2)] = null);

(statearr_29391_29456[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (45))){
var inst_29318 = (state_29328[(2)]);
var state_29328__$1 = state_29328;
var statearr_29392_29457 = state_29328__$1;
(statearr_29392_29457[(2)] = inst_29318);

(statearr_29392_29457[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (26))){
var inst_29260 = (state_29328[(29)]);
var inst_29314 = (state_29328[(2)]);
var inst_29315 = cljs.core.seq.call(null,inst_29260);
var state_29328__$1 = (function (){var statearr_29393 = state_29328;
(statearr_29393[(31)] = inst_29314);

return statearr_29393;
})();
if(inst_29315){
var statearr_29394_29458 = state_29328__$1;
(statearr_29394_29458[(1)] = (42));

} else {
var statearr_29395_29459 = state_29328__$1;
(statearr_29395_29459[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (16))){
var inst_29227 = (state_29328[(7)]);
var inst_29229 = cljs.core.chunked_seq_QMARK_.call(null,inst_29227);
var state_29328__$1 = state_29328;
if(inst_29229){
var statearr_29396_29460 = state_29328__$1;
(statearr_29396_29460[(1)] = (19));

} else {
var statearr_29397_29461 = state_29328__$1;
(statearr_29397_29461[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (38))){
var inst_29307 = (state_29328[(2)]);
var state_29328__$1 = state_29328;
var statearr_29398_29462 = state_29328__$1;
(statearr_29398_29462[(2)] = inst_29307);

(statearr_29398_29462[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (30))){
var state_29328__$1 = state_29328;
var statearr_29399_29463 = state_29328__$1;
(statearr_29399_29463[(2)] = null);

(statearr_29399_29463[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (10))){
var inst_29206 = (state_29328[(15)]);
var inst_29208 = (state_29328[(17)]);
var inst_29216 = cljs.core._nth.call(null,inst_29206,inst_29208);
var inst_29217 = cljs.core.nth.call(null,inst_29216,(0),null);
var inst_29218 = cljs.core.nth.call(null,inst_29216,(1),null);
var state_29328__$1 = (function (){var statearr_29400 = state_29328;
(statearr_29400[(26)] = inst_29217);

return statearr_29400;
})();
if(cljs.core.truth_(inst_29218)){
var statearr_29401_29464 = state_29328__$1;
(statearr_29401_29464[(1)] = (13));

} else {
var statearr_29402_29465 = state_29328__$1;
(statearr_29402_29465[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (18))){
var inst_29253 = (state_29328[(2)]);
var state_29328__$1 = state_29328;
var statearr_29403_29466 = state_29328__$1;
(statearr_29403_29466[(2)] = inst_29253);

(statearr_29403_29466[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (42))){
var state_29328__$1 = state_29328;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29328__$1,(45),dchan);
} else {
if((state_val_29329 === (37))){
var inst_29296 = (state_29328[(23)]);
var inst_29287 = (state_29328[(25)]);
var inst_29196 = (state_29328[(11)]);
var inst_29296__$1 = cljs.core.first.call(null,inst_29287);
var inst_29297 = cljs.core.async.put_BANG_.call(null,inst_29296__$1,inst_29196,done);
var state_29328__$1 = (function (){var statearr_29404 = state_29328;
(statearr_29404[(23)] = inst_29296__$1);

return statearr_29404;
})();
if(cljs.core.truth_(inst_29297)){
var statearr_29405_29467 = state_29328__$1;
(statearr_29405_29467[(1)] = (39));

} else {
var statearr_29406_29468 = state_29328__$1;
(statearr_29406_29468[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29329 === (8))){
var inst_29207 = (state_29328[(13)]);
var inst_29208 = (state_29328[(17)]);
var inst_29210 = (inst_29208 < inst_29207);
var inst_29211 = inst_29210;
var state_29328__$1 = state_29328;
if(cljs.core.truth_(inst_29211)){
var statearr_29407_29469 = state_29328__$1;
(statearr_29407_29469[(1)] = (10));

} else {
var statearr_29408_29470 = state_29328__$1;
(statearr_29408_29470[(1)] = (11));

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
});})(c__28093__auto___29416,cs,m,dchan,dctr,done))
;
return ((function (switch__27981__auto__,c__28093__auto___29416,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27982__auto__ = null;
var cljs$core$async$mult_$_state_machine__27982__auto____0 = (function (){
var statearr_29412 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29412[(0)] = cljs$core$async$mult_$_state_machine__27982__auto__);

(statearr_29412[(1)] = (1));

return statearr_29412;
});
var cljs$core$async$mult_$_state_machine__27982__auto____1 = (function (state_29328){
while(true){
var ret_value__27983__auto__ = (function (){try{while(true){
var result__27984__auto__ = switch__27981__auto__.call(null,state_29328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27984__auto__;
}
break;
}
}catch (e29413){if((e29413 instanceof Object)){
var ex__27985__auto__ = e29413;
var statearr_29414_29471 = state_29328;
(statearr_29414_29471[(5)] = ex__27985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29472 = state_29328;
state_29328 = G__29472;
continue;
} else {
return ret_value__27983__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27982__auto__ = function(state_29328){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27982__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27982__auto____1.call(this,state_29328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27982__auto____0;
cljs$core$async$mult_$_state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27982__auto____1;
return cljs$core$async$mult_$_state_machine__27982__auto__;
})()
;})(switch__27981__auto__,c__28093__auto___29416,cs,m,dchan,dctr,done))
})();
var state__28095__auto__ = (function (){var statearr_29415 = f__28094__auto__.call(null);
(statearr_29415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28093__auto___29416);

return statearr_29415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28095__auto__);
});})(c__28093__auto___29416,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args29473 = [];
var len__26996__auto___29476 = arguments.length;
var i__26997__auto___29477 = (0);
while(true){
if((i__26997__auto___29477 < len__26996__auto___29476)){
args29473.push((arguments[i__26997__auto___29477]));

var G__29478 = (i__26997__auto___29477 + (1));
i__26997__auto___29477 = G__29478;
continue;
} else {
}
break;
}

var G__29475 = args29473.length;
switch (G__29475) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29473.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__26551__auto__ = (((m == null))?null:m);
var m__26552__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__26551__auto__)]);
if(!((m__26552__auto__ == null))){
return m__26552__auto__.call(null,m,ch);
} else {
var m__26552__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__26552__auto____$1 == null))){
return m__26552__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__26551__auto__ = (((m == null))?null:m);
var m__26552__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__26551__auto__)]);
if(!((m__26552__auto__ == null))){
return m__26552__auto__.call(null,m,ch);
} else {
var m__26552__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__26552__auto____$1 == null))){
return m__26552__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__26551__auto__ = (((m == null))?null:m);
var m__26552__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__26551__auto__)]);
if(!((m__26552__auto__ == null))){
return m__26552__auto__.call(null,m);
} else {
var m__26552__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__26552__auto____$1 == null))){
return m__26552__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__26551__auto__ = (((m == null))?null:m);
var m__26552__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__26551__auto__)]);
if(!((m__26552__auto__ == null))){
return m__26552__auto__.call(null,m,state_map);
} else {
var m__26552__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__26552__auto____$1 == null))){
return m__26552__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__26551__auto__ = (((m == null))?null:m);
var m__26552__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__26551__auto__)]);
if(!((m__26552__auto__ == null))){
return m__26552__auto__.call(null,m,mode);
} else {
var m__26552__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__26552__auto____$1 == null))){
return m__26552__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27003__auto__ = [];
var len__26996__auto___29490 = arguments.length;
var i__26997__auto___29491 = (0);
while(true){
if((i__26997__auto___29491 < len__26996__auto___29490)){
args__27003__auto__.push((arguments[i__26997__auto___29491]));

var G__29492 = (i__26997__auto___29491 + (1));
i__26997__auto___29491 = G__29492;
continue;
} else {
}
break;
}

var argseq__27004__auto__ = ((((3) < args__27003__auto__.length))?(new cljs.core.IndexedSeq(args__27003__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27004__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29484){
var map__29485 = p__29484;
var map__29485__$1 = ((((!((map__29485 == null)))?((((map__29485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29485.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29485):map__29485);
var opts = map__29485__$1;
var statearr_29487_29493 = state;
(statearr_29487_29493[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29485,map__29485__$1,opts){
return (function (val){
var statearr_29488_29494 = state;
(statearr_29488_29494[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29485,map__29485__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29489_29495 = state;
(statearr_29489_29495[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29480){
var G__29481 = cljs.core.first.call(null,seq29480);
var seq29480__$1 = cljs.core.next.call(null,seq29480);
var G__29482 = cljs.core.first.call(null,seq29480__$1);
var seq29480__$2 = cljs.core.next.call(null,seq29480__$1);
var G__29483 = cljs.core.first.call(null,seq29480__$2);
var seq29480__$3 = cljs.core.next.call(null,seq29480__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29481,G__29482,G__29483,seq29480__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29663 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29663 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta29664){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta29664 = meta29664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29665,meta29664__$1){
var self__ = this;
var _29665__$1 = this;
return (new cljs.core.async.t_cljs$core$async29663(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta29664__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29663.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29665){
var self__ = this;
var _29665__$1 = this;
return self__.meta29664;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29663.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29663.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29663.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29663.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29663.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29663.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29663.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29663.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29663.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta29664","meta29664",1752659975,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29663.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29663";

cljs.core.async.t_cljs$core$async29663.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26494__auto__,writer__26495__auto__,opt__26496__auto__){
return cljs.core._write.call(null,writer__26495__auto__,"cljs.core.async/t_cljs$core$async29663");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29663 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29663(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta29664){
return (new cljs.core.async.t_cljs$core$async29663(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta29664));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29663(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28093__auto___29830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28093__auto___29830,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28094__auto__ = (function (){var switch__27981__auto__ = ((function (c__28093__auto___29830,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29767){
var state_val_29768 = (state_29767[(1)]);
if((state_val_29768 === (7))){
var inst_29682 = (state_29767[(2)]);
var state_29767__$1 = state_29767;
var statearr_29769_29831 = state_29767__$1;
(statearr_29769_29831[(2)] = inst_29682);

(statearr_29769_29831[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (20))){
var inst_29694 = (state_29767[(7)]);
var state_29767__$1 = state_29767;
var statearr_29770_29832 = state_29767__$1;
(statearr_29770_29832[(2)] = inst_29694);

(statearr_29770_29832[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (27))){
var state_29767__$1 = state_29767;
var statearr_29771_29833 = state_29767__$1;
(statearr_29771_29833[(2)] = null);

(statearr_29771_29833[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (1))){
var inst_29669 = (state_29767[(8)]);
var inst_29669__$1 = calc_state.call(null);
var inst_29671 = (inst_29669__$1 == null);
var inst_29672 = cljs.core.not.call(null,inst_29671);
var state_29767__$1 = (function (){var statearr_29772 = state_29767;
(statearr_29772[(8)] = inst_29669__$1);

return statearr_29772;
})();
if(inst_29672){
var statearr_29773_29834 = state_29767__$1;
(statearr_29773_29834[(1)] = (2));

} else {
var statearr_29774_29835 = state_29767__$1;
(statearr_29774_29835[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (24))){
var inst_29741 = (state_29767[(9)]);
var inst_29718 = (state_29767[(10)]);
var inst_29727 = (state_29767[(11)]);
var inst_29741__$1 = inst_29718.call(null,inst_29727);
var state_29767__$1 = (function (){var statearr_29775 = state_29767;
(statearr_29775[(9)] = inst_29741__$1);

return statearr_29775;
})();
if(cljs.core.truth_(inst_29741__$1)){
var statearr_29776_29836 = state_29767__$1;
(statearr_29776_29836[(1)] = (29));

} else {
var statearr_29777_29837 = state_29767__$1;
(statearr_29777_29837[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (4))){
var inst_29685 = (state_29767[(2)]);
var state_29767__$1 = state_29767;
if(cljs.core.truth_(inst_29685)){
var statearr_29778_29838 = state_29767__$1;
(statearr_29778_29838[(1)] = (8));

} else {
var statearr_29779_29839 = state_29767__$1;
(statearr_29779_29839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (15))){
var inst_29712 = (state_29767[(2)]);
var state_29767__$1 = state_29767;
if(cljs.core.truth_(inst_29712)){
var statearr_29780_29840 = state_29767__$1;
(statearr_29780_29840[(1)] = (19));

} else {
var statearr_29781_29841 = state_29767__$1;
(statearr_29781_29841[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (21))){
var inst_29717 = (state_29767[(12)]);
var inst_29717__$1 = (state_29767[(2)]);
var inst_29718 = cljs.core.get.call(null,inst_29717__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29719 = cljs.core.get.call(null,inst_29717__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29720 = cljs.core.get.call(null,inst_29717__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29767__$1 = (function (){var statearr_29782 = state_29767;
(statearr_29782[(13)] = inst_29719);

(statearr_29782[(12)] = inst_29717__$1);

(statearr_29782[(10)] = inst_29718);

return statearr_29782;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29767__$1,(22),inst_29720);
} else {
if((state_val_29768 === (31))){
var inst_29749 = (state_29767[(2)]);
var state_29767__$1 = state_29767;
if(cljs.core.truth_(inst_29749)){
var statearr_29783_29842 = state_29767__$1;
(statearr_29783_29842[(1)] = (32));

} else {
var statearr_29784_29843 = state_29767__$1;
(statearr_29784_29843[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (32))){
var inst_29726 = (state_29767[(14)]);
var state_29767__$1 = state_29767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29767__$1,(35),out,inst_29726);
} else {
if((state_val_29768 === (33))){
var inst_29717 = (state_29767[(12)]);
var inst_29694 = inst_29717;
var state_29767__$1 = (function (){var statearr_29785 = state_29767;
(statearr_29785[(7)] = inst_29694);

return statearr_29785;
})();
var statearr_29786_29844 = state_29767__$1;
(statearr_29786_29844[(2)] = null);

(statearr_29786_29844[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (13))){
var inst_29694 = (state_29767[(7)]);
var inst_29701 = inst_29694.cljs$lang$protocol_mask$partition0$;
var inst_29702 = (inst_29701 & (64));
var inst_29703 = inst_29694.cljs$core$ISeq$;
var inst_29704 = (cljs.core.PROTOCOL_SENTINEL === inst_29703);
var inst_29705 = (inst_29702) || (inst_29704);
var state_29767__$1 = state_29767;
if(cljs.core.truth_(inst_29705)){
var statearr_29787_29845 = state_29767__$1;
(statearr_29787_29845[(1)] = (16));

} else {
var statearr_29788_29846 = state_29767__$1;
(statearr_29788_29846[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (22))){
var inst_29726 = (state_29767[(14)]);
var inst_29727 = (state_29767[(11)]);
var inst_29725 = (state_29767[(2)]);
var inst_29726__$1 = cljs.core.nth.call(null,inst_29725,(0),null);
var inst_29727__$1 = cljs.core.nth.call(null,inst_29725,(1),null);
var inst_29728 = (inst_29726__$1 == null);
var inst_29729 = cljs.core._EQ_.call(null,inst_29727__$1,change);
var inst_29730 = (inst_29728) || (inst_29729);
var state_29767__$1 = (function (){var statearr_29789 = state_29767;
(statearr_29789[(14)] = inst_29726__$1);

(statearr_29789[(11)] = inst_29727__$1);

return statearr_29789;
})();
if(cljs.core.truth_(inst_29730)){
var statearr_29790_29847 = state_29767__$1;
(statearr_29790_29847[(1)] = (23));

} else {
var statearr_29791_29848 = state_29767__$1;
(statearr_29791_29848[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (36))){
var inst_29717 = (state_29767[(12)]);
var inst_29694 = inst_29717;
var state_29767__$1 = (function (){var statearr_29792 = state_29767;
(statearr_29792[(7)] = inst_29694);

return statearr_29792;
})();
var statearr_29793_29849 = state_29767__$1;
(statearr_29793_29849[(2)] = null);

(statearr_29793_29849[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (29))){
var inst_29741 = (state_29767[(9)]);
var state_29767__$1 = state_29767;
var statearr_29794_29850 = state_29767__$1;
(statearr_29794_29850[(2)] = inst_29741);

(statearr_29794_29850[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (6))){
var state_29767__$1 = state_29767;
var statearr_29795_29851 = state_29767__$1;
(statearr_29795_29851[(2)] = false);

(statearr_29795_29851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (28))){
var inst_29737 = (state_29767[(2)]);
var inst_29738 = calc_state.call(null);
var inst_29694 = inst_29738;
var state_29767__$1 = (function (){var statearr_29796 = state_29767;
(statearr_29796[(7)] = inst_29694);

(statearr_29796[(15)] = inst_29737);

return statearr_29796;
})();
var statearr_29797_29852 = state_29767__$1;
(statearr_29797_29852[(2)] = null);

(statearr_29797_29852[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (25))){
var inst_29763 = (state_29767[(2)]);
var state_29767__$1 = state_29767;
var statearr_29798_29853 = state_29767__$1;
(statearr_29798_29853[(2)] = inst_29763);

(statearr_29798_29853[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (34))){
var inst_29761 = (state_29767[(2)]);
var state_29767__$1 = state_29767;
var statearr_29799_29854 = state_29767__$1;
(statearr_29799_29854[(2)] = inst_29761);

(statearr_29799_29854[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (17))){
var state_29767__$1 = state_29767;
var statearr_29800_29855 = state_29767__$1;
(statearr_29800_29855[(2)] = false);

(statearr_29800_29855[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (3))){
var state_29767__$1 = state_29767;
var statearr_29801_29856 = state_29767__$1;
(statearr_29801_29856[(2)] = false);

(statearr_29801_29856[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (12))){
var inst_29765 = (state_29767[(2)]);
var state_29767__$1 = state_29767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29767__$1,inst_29765);
} else {
if((state_val_29768 === (2))){
var inst_29669 = (state_29767[(8)]);
var inst_29674 = inst_29669.cljs$lang$protocol_mask$partition0$;
var inst_29675 = (inst_29674 & (64));
var inst_29676 = inst_29669.cljs$core$ISeq$;
var inst_29677 = (cljs.core.PROTOCOL_SENTINEL === inst_29676);
var inst_29678 = (inst_29675) || (inst_29677);
var state_29767__$1 = state_29767;
if(cljs.core.truth_(inst_29678)){
var statearr_29802_29857 = state_29767__$1;
(statearr_29802_29857[(1)] = (5));

} else {
var statearr_29803_29858 = state_29767__$1;
(statearr_29803_29858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (23))){
var inst_29726 = (state_29767[(14)]);
var inst_29732 = (inst_29726 == null);
var state_29767__$1 = state_29767;
if(cljs.core.truth_(inst_29732)){
var statearr_29804_29859 = state_29767__$1;
(statearr_29804_29859[(1)] = (26));

} else {
var statearr_29805_29860 = state_29767__$1;
(statearr_29805_29860[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (35))){
var inst_29752 = (state_29767[(2)]);
var state_29767__$1 = state_29767;
if(cljs.core.truth_(inst_29752)){
var statearr_29806_29861 = state_29767__$1;
(statearr_29806_29861[(1)] = (36));

} else {
var statearr_29807_29862 = state_29767__$1;
(statearr_29807_29862[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (19))){
var inst_29694 = (state_29767[(7)]);
var inst_29714 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29694);
var state_29767__$1 = state_29767;
var statearr_29808_29863 = state_29767__$1;
(statearr_29808_29863[(2)] = inst_29714);

(statearr_29808_29863[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (11))){
var inst_29694 = (state_29767[(7)]);
var inst_29698 = (inst_29694 == null);
var inst_29699 = cljs.core.not.call(null,inst_29698);
var state_29767__$1 = state_29767;
if(inst_29699){
var statearr_29809_29864 = state_29767__$1;
(statearr_29809_29864[(1)] = (13));

} else {
var statearr_29810_29865 = state_29767__$1;
(statearr_29810_29865[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (9))){
var inst_29669 = (state_29767[(8)]);
var state_29767__$1 = state_29767;
var statearr_29811_29866 = state_29767__$1;
(statearr_29811_29866[(2)] = inst_29669);

(statearr_29811_29866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (5))){
var state_29767__$1 = state_29767;
var statearr_29812_29867 = state_29767__$1;
(statearr_29812_29867[(2)] = true);

(statearr_29812_29867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (14))){
var state_29767__$1 = state_29767;
var statearr_29813_29868 = state_29767__$1;
(statearr_29813_29868[(2)] = false);

(statearr_29813_29868[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (26))){
var inst_29727 = (state_29767[(11)]);
var inst_29734 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29727);
var state_29767__$1 = state_29767;
var statearr_29814_29869 = state_29767__$1;
(statearr_29814_29869[(2)] = inst_29734);

(statearr_29814_29869[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (16))){
var state_29767__$1 = state_29767;
var statearr_29815_29870 = state_29767__$1;
(statearr_29815_29870[(2)] = true);

(statearr_29815_29870[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (38))){
var inst_29757 = (state_29767[(2)]);
var state_29767__$1 = state_29767;
var statearr_29816_29871 = state_29767__$1;
(statearr_29816_29871[(2)] = inst_29757);

(statearr_29816_29871[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (30))){
var inst_29719 = (state_29767[(13)]);
var inst_29718 = (state_29767[(10)]);
var inst_29727 = (state_29767[(11)]);
var inst_29744 = cljs.core.empty_QMARK_.call(null,inst_29718);
var inst_29745 = inst_29719.call(null,inst_29727);
var inst_29746 = cljs.core.not.call(null,inst_29745);
var inst_29747 = (inst_29744) && (inst_29746);
var state_29767__$1 = state_29767;
var statearr_29817_29872 = state_29767__$1;
(statearr_29817_29872[(2)] = inst_29747);

(statearr_29817_29872[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (10))){
var inst_29669 = (state_29767[(8)]);
var inst_29690 = (state_29767[(2)]);
var inst_29691 = cljs.core.get.call(null,inst_29690,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29692 = cljs.core.get.call(null,inst_29690,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29693 = cljs.core.get.call(null,inst_29690,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29694 = inst_29669;
var state_29767__$1 = (function (){var statearr_29818 = state_29767;
(statearr_29818[(7)] = inst_29694);

(statearr_29818[(16)] = inst_29692);

(statearr_29818[(17)] = inst_29693);

(statearr_29818[(18)] = inst_29691);

return statearr_29818;
})();
var statearr_29819_29873 = state_29767__$1;
(statearr_29819_29873[(2)] = null);

(statearr_29819_29873[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (18))){
var inst_29709 = (state_29767[(2)]);
var state_29767__$1 = state_29767;
var statearr_29820_29874 = state_29767__$1;
(statearr_29820_29874[(2)] = inst_29709);

(statearr_29820_29874[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (37))){
var state_29767__$1 = state_29767;
var statearr_29821_29875 = state_29767__$1;
(statearr_29821_29875[(2)] = null);

(statearr_29821_29875[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29768 === (8))){
var inst_29669 = (state_29767[(8)]);
var inst_29687 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29669);
var state_29767__$1 = state_29767;
var statearr_29822_29876 = state_29767__$1;
(statearr_29822_29876[(2)] = inst_29687);

(statearr_29822_29876[(1)] = (10));


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
});})(c__28093__auto___29830,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27981__auto__,c__28093__auto___29830,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27982__auto__ = null;
var cljs$core$async$mix_$_state_machine__27982__auto____0 = (function (){
var statearr_29826 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29826[(0)] = cljs$core$async$mix_$_state_machine__27982__auto__);

(statearr_29826[(1)] = (1));

return statearr_29826;
});
var cljs$core$async$mix_$_state_machine__27982__auto____1 = (function (state_29767){
while(true){
var ret_value__27983__auto__ = (function (){try{while(true){
var result__27984__auto__ = switch__27981__auto__.call(null,state_29767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27984__auto__;
}
break;
}
}catch (e29827){if((e29827 instanceof Object)){
var ex__27985__auto__ = e29827;
var statearr_29828_29877 = state_29767;
(statearr_29828_29877[(5)] = ex__27985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29878 = state_29767;
state_29767 = G__29878;
continue;
} else {
return ret_value__27983__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27982__auto__ = function(state_29767){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27982__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27982__auto____1.call(this,state_29767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27982__auto____0;
cljs$core$async$mix_$_state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27982__auto____1;
return cljs$core$async$mix_$_state_machine__27982__auto__;
})()
;})(switch__27981__auto__,c__28093__auto___29830,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28095__auto__ = (function (){var statearr_29829 = f__28094__auto__.call(null);
(statearr_29829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28093__auto___29830);

return statearr_29829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28095__auto__);
});})(c__28093__auto___29830,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__26551__auto__ = (((p == null))?null:p);
var m__26552__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__26551__auto__)]);
if(!((m__26552__auto__ == null))){
return m__26552__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__26552__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__26552__auto____$1 == null))){
return m__26552__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__26551__auto__ = (((p == null))?null:p);
var m__26552__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__26551__auto__)]);
if(!((m__26552__auto__ == null))){
return m__26552__auto__.call(null,p,v,ch);
} else {
var m__26552__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__26552__auto____$1 == null))){
return m__26552__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29879 = [];
var len__26996__auto___29882 = arguments.length;
var i__26997__auto___29883 = (0);
while(true){
if((i__26997__auto___29883 < len__26996__auto___29882)){
args29879.push((arguments[i__26997__auto___29883]));

var G__29884 = (i__26997__auto___29883 + (1));
i__26997__auto___29883 = G__29884;
continue;
} else {
}
break;
}

var G__29881 = args29879.length;
switch (G__29881) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29879.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__26551__auto__ = (((p == null))?null:p);
var m__26552__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26551__auto__)]);
if(!((m__26552__auto__ == null))){
return m__26552__auto__.call(null,p);
} else {
var m__26552__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26552__auto____$1 == null))){
return m__26552__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__26551__auto__ = (((p == null))?null:p);
var m__26552__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26551__auto__)]);
if(!((m__26552__auto__ == null))){
return m__26552__auto__.call(null,p,v);
} else {
var m__26552__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26552__auto____$1 == null))){
return m__26552__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args29887 = [];
var len__26996__auto___30012 = arguments.length;
var i__26997__auto___30013 = (0);
while(true){
if((i__26997__auto___30013 < len__26996__auto___30012)){
args29887.push((arguments[i__26997__auto___30013]));

var G__30014 = (i__26997__auto___30013 + (1));
i__26997__auto___30013 = G__30014;
continue;
} else {
}
break;
}

var G__29889 = args29887.length;
switch (G__29889) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29887.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25888__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25888__auto__)){
return or__25888__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25888__auto__,mults){
return (function (p1__29886_SHARP_){
if(cljs.core.truth_(p1__29886_SHARP_.call(null,topic))){
return p1__29886_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29886_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25888__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29890 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29890 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29891){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29891 = meta29891;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29892,meta29891__$1){
var self__ = this;
var _29892__$1 = this;
return (new cljs.core.async.t_cljs$core$async29890(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29891__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29890.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29892){
var self__ = this;
var _29892__$1 = this;
return self__.meta29891;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29890.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29890.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29890.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29890.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29890.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29890.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29890.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29890.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29891","meta29891",-1978535354,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29890.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29890.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29890";

cljs.core.async.t_cljs$core$async29890.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26494__auto__,writer__26495__auto__,opt__26496__auto__){
return cljs.core._write.call(null,writer__26495__auto__,"cljs.core.async/t_cljs$core$async29890");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29890 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29890(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29891){
return (new cljs.core.async.t_cljs$core$async29890(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29891));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29890(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28093__auto___30016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28093__auto___30016,mults,ensure_mult,p){
return (function (){
var f__28094__auto__ = (function (){var switch__27981__auto__ = ((function (c__28093__auto___30016,mults,ensure_mult,p){
return (function (state_29964){
var state_val_29965 = (state_29964[(1)]);
if((state_val_29965 === (7))){
var inst_29960 = (state_29964[(2)]);
var state_29964__$1 = state_29964;
var statearr_29966_30017 = state_29964__$1;
(statearr_29966_30017[(2)] = inst_29960);

(statearr_29966_30017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29965 === (20))){
var state_29964__$1 = state_29964;
var statearr_29967_30018 = state_29964__$1;
(statearr_29967_30018[(2)] = null);

(statearr_29967_30018[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29965 === (1))){
var state_29964__$1 = state_29964;
var statearr_29968_30019 = state_29964__$1;
(statearr_29968_30019[(2)] = null);

(statearr_29968_30019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29965 === (24))){
var inst_29943 = (state_29964[(7)]);
var inst_29952 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29943);
var state_29964__$1 = state_29964;
var statearr_29969_30020 = state_29964__$1;
(statearr_29969_30020[(2)] = inst_29952);

(statearr_29969_30020[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29965 === (4))){
var inst_29895 = (state_29964[(8)]);
var inst_29895__$1 = (state_29964[(2)]);
var inst_29896 = (inst_29895__$1 == null);
var state_29964__$1 = (function (){var statearr_29970 = state_29964;
(statearr_29970[(8)] = inst_29895__$1);

return statearr_29970;
})();
if(cljs.core.truth_(inst_29896)){
var statearr_29971_30021 = state_29964__$1;
(statearr_29971_30021[(1)] = (5));

} else {
var statearr_29972_30022 = state_29964__$1;
(statearr_29972_30022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29965 === (15))){
var inst_29937 = (state_29964[(2)]);
var state_29964__$1 = state_29964;
var statearr_29973_30023 = state_29964__$1;
(statearr_29973_30023[(2)] = inst_29937);

(statearr_29973_30023[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29965 === (21))){
var inst_29957 = (state_29964[(2)]);
var state_29964__$1 = (function (){var statearr_29974 = state_29964;
(statearr_29974[(9)] = inst_29957);

return statearr_29974;
})();
var statearr_29975_30024 = state_29964__$1;
(statearr_29975_30024[(2)] = null);

(statearr_29975_30024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29965 === (13))){
var inst_29919 = (state_29964[(10)]);
var inst_29921 = cljs.core.chunked_seq_QMARK_.call(null,inst_29919);
var state_29964__$1 = state_29964;
if(inst_29921){
var statearr_29976_30025 = state_29964__$1;
(statearr_29976_30025[(1)] = (16));

} else {
var statearr_29977_30026 = state_29964__$1;
(statearr_29977_30026[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29965 === (22))){
var inst_29949 = (state_29964[(2)]);
var state_29964__$1 = state_29964;
if(cljs.core.truth_(inst_29949)){
var statearr_29978_30027 = state_29964__$1;
(statearr_29978_30027[(1)] = (23));

} else {
var statearr_29979_30028 = state_29964__$1;
(statearr_29979_30028[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29965 === (6))){
var inst_29943 = (state_29964[(7)]);
var inst_29895 = (state_29964[(8)]);
var inst_29945 = (state_29964[(11)]);
var inst_29943__$1 = topic_fn.call(null,inst_29895);
var inst_29944 = cljs.core.deref.call(null,mults);
var inst_29945__$1 = cljs.core.get.call(null,inst_29944,inst_29943__$1);
var state_29964__$1 = (function (){var statearr_29980 = state_29964;
(statearr_29980[(7)] = inst_29943__$1);

(statearr_29980[(11)] = inst_29945__$1);

return statearr_29980;
})();
if(cljs.core.truth_(inst_29945__$1)){
var statearr_29981_30029 = state_29964__$1;
(statearr_29981_30029[(1)] = (19));

} else {
var statearr_29982_30030 = state_29964__$1;
(statearr_29982_30030[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29965 === (25))){
var inst_29954 = (state_29964[(2)]);
var state_29964__$1 = state_29964;
var statearr_29983_30031 = state_29964__$1;
(statearr_29983_30031[(2)] = inst_29954);

(statearr_29983_30031[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29965 === (17))){
var inst_29919 = (state_29964[(10)]);
var inst_29928 = cljs.core.first.call(null,inst_29919);
var inst_29929 = cljs.core.async.muxch_STAR_.call(null,inst_29928);
var inst_29930 = cljs.core.async.close_BANG_.call(null,inst_29929);
var inst_29931 = cljs.core.next.call(null,inst_29919);
var inst_29905 = inst_29931;
var inst_29906 = null;
var inst_29907 = (0);
var inst_29908 = (0);
var state_29964__$1 = (function (){var statearr_29984 = state_29964;
(statearr_29984[(12)] = inst_29930);

(statearr_29984[(13)] = inst_29906);

(statearr_29984[(14)] = inst_29908);

(statearr_29984[(15)] = inst_29907);

(statearr_29984[(16)] = inst_29905);

return statearr_29984;
})();
var statearr_29985_30032 = state_29964__$1;
(statearr_29985_30032[(2)] = null);

(statearr_29985_30032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29965 === (3))){
var inst_29962 = (state_29964[(2)]);
var state_29964__$1 = state_29964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29964__$1,inst_29962);
} else {
if((state_val_29965 === (12))){
var inst_29939 = (state_29964[(2)]);
var state_29964__$1 = state_29964;
var statearr_29986_30033 = state_29964__$1;
(statearr_29986_30033[(2)] = inst_29939);

(statearr_29986_30033[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29965 === (2))){
var state_29964__$1 = state_29964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29964__$1,(4),ch);
} else {
if((state_val_29965 === (23))){
var state_29964__$1 = state_29964;
var statearr_29987_30034 = state_29964__$1;
(statearr_29987_30034[(2)] = null);

(statearr_29987_30034[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29965 === (19))){
var inst_29895 = (state_29964[(8)]);
var inst_29945 = (state_29964[(11)]);
var inst_29947 = cljs.core.async.muxch_STAR_.call(null,inst_29945);
var state_29964__$1 = state_29964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29964__$1,(22),inst_29947,inst_29895);
} else {
if((state_val_29965 === (11))){
var inst_29919 = (state_29964[(10)]);
var inst_29905 = (state_29964[(16)]);
var inst_29919__$1 = cljs.core.seq.call(null,inst_29905);
var state_29964__$1 = (function (){var statearr_29988 = state_29964;
(statearr_29988[(10)] = inst_29919__$1);

return statearr_29988;
})();
if(inst_29919__$1){
var statearr_29989_30035 = state_29964__$1;
(statearr_29989_30035[(1)] = (13));

} else {
var statearr_29990_30036 = state_29964__$1;
(statearr_29990_30036[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29965 === (9))){
var inst_29941 = (state_29964[(2)]);
var state_29964__$1 = state_29964;
var statearr_29991_30037 = state_29964__$1;
(statearr_29991_30037[(2)] = inst_29941);

(statearr_29991_30037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29965 === (5))){
var inst_29902 = cljs.core.deref.call(null,mults);
var inst_29903 = cljs.core.vals.call(null,inst_29902);
var inst_29904 = cljs.core.seq.call(null,inst_29903);
var inst_29905 = inst_29904;
var inst_29906 = null;
var inst_29907 = (0);
var inst_29908 = (0);
var state_29964__$1 = (function (){var statearr_29992 = state_29964;
(statearr_29992[(13)] = inst_29906);

(statearr_29992[(14)] = inst_29908);

(statearr_29992[(15)] = inst_29907);

(statearr_29992[(16)] = inst_29905);

return statearr_29992;
})();
var statearr_29993_30038 = state_29964__$1;
(statearr_29993_30038[(2)] = null);

(statearr_29993_30038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29965 === (14))){
var state_29964__$1 = state_29964;
var statearr_29997_30039 = state_29964__$1;
(statearr_29997_30039[(2)] = null);

(statearr_29997_30039[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29965 === (16))){
var inst_29919 = (state_29964[(10)]);
var inst_29923 = cljs.core.chunk_first.call(null,inst_29919);
var inst_29924 = cljs.core.chunk_rest.call(null,inst_29919);
var inst_29925 = cljs.core.count.call(null,inst_29923);
var inst_29905 = inst_29924;
var inst_29906 = inst_29923;
var inst_29907 = inst_29925;
var inst_29908 = (0);
var state_29964__$1 = (function (){var statearr_29998 = state_29964;
(statearr_29998[(13)] = inst_29906);

(statearr_29998[(14)] = inst_29908);

(statearr_29998[(15)] = inst_29907);

(statearr_29998[(16)] = inst_29905);

return statearr_29998;
})();
var statearr_29999_30040 = state_29964__$1;
(statearr_29999_30040[(2)] = null);

(statearr_29999_30040[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29965 === (10))){
var inst_29906 = (state_29964[(13)]);
var inst_29908 = (state_29964[(14)]);
var inst_29907 = (state_29964[(15)]);
var inst_29905 = (state_29964[(16)]);
var inst_29913 = cljs.core._nth.call(null,inst_29906,inst_29908);
var inst_29914 = cljs.core.async.muxch_STAR_.call(null,inst_29913);
var inst_29915 = cljs.core.async.close_BANG_.call(null,inst_29914);
var inst_29916 = (inst_29908 + (1));
var tmp29994 = inst_29906;
var tmp29995 = inst_29907;
var tmp29996 = inst_29905;
var inst_29905__$1 = tmp29996;
var inst_29906__$1 = tmp29994;
var inst_29907__$1 = tmp29995;
var inst_29908__$1 = inst_29916;
var state_29964__$1 = (function (){var statearr_30000 = state_29964;
(statearr_30000[(13)] = inst_29906__$1);

(statearr_30000[(14)] = inst_29908__$1);

(statearr_30000[(17)] = inst_29915);

(statearr_30000[(15)] = inst_29907__$1);

(statearr_30000[(16)] = inst_29905__$1);

return statearr_30000;
})();
var statearr_30001_30041 = state_29964__$1;
(statearr_30001_30041[(2)] = null);

(statearr_30001_30041[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29965 === (18))){
var inst_29934 = (state_29964[(2)]);
var state_29964__$1 = state_29964;
var statearr_30002_30042 = state_29964__$1;
(statearr_30002_30042[(2)] = inst_29934);

(statearr_30002_30042[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29965 === (8))){
var inst_29908 = (state_29964[(14)]);
var inst_29907 = (state_29964[(15)]);
var inst_29910 = (inst_29908 < inst_29907);
var inst_29911 = inst_29910;
var state_29964__$1 = state_29964;
if(cljs.core.truth_(inst_29911)){
var statearr_30003_30043 = state_29964__$1;
(statearr_30003_30043[(1)] = (10));

} else {
var statearr_30004_30044 = state_29964__$1;
(statearr_30004_30044[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__28093__auto___30016,mults,ensure_mult,p))
;
return ((function (switch__27981__auto__,c__28093__auto___30016,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27982__auto__ = null;
var cljs$core$async$state_machine__27982__auto____0 = (function (){
var statearr_30008 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30008[(0)] = cljs$core$async$state_machine__27982__auto__);

(statearr_30008[(1)] = (1));

return statearr_30008;
});
var cljs$core$async$state_machine__27982__auto____1 = (function (state_29964){
while(true){
var ret_value__27983__auto__ = (function (){try{while(true){
var result__27984__auto__ = switch__27981__auto__.call(null,state_29964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27984__auto__;
}
break;
}
}catch (e30009){if((e30009 instanceof Object)){
var ex__27985__auto__ = e30009;
var statearr_30010_30045 = state_29964;
(statearr_30010_30045[(5)] = ex__27985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30046 = state_29964;
state_29964 = G__30046;
continue;
} else {
return ret_value__27983__auto__;
}
break;
}
});
cljs$core$async$state_machine__27982__auto__ = function(state_29964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27982__auto____1.call(this,state_29964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27982__auto____0;
cljs$core$async$state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27982__auto____1;
return cljs$core$async$state_machine__27982__auto__;
})()
;})(switch__27981__auto__,c__28093__auto___30016,mults,ensure_mult,p))
})();
var state__28095__auto__ = (function (){var statearr_30011 = f__28094__auto__.call(null);
(statearr_30011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28093__auto___30016);

return statearr_30011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28095__auto__);
});})(c__28093__auto___30016,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args30047 = [];
var len__26996__auto___30050 = arguments.length;
var i__26997__auto___30051 = (0);
while(true){
if((i__26997__auto___30051 < len__26996__auto___30050)){
args30047.push((arguments[i__26997__auto___30051]));

var G__30052 = (i__26997__auto___30051 + (1));
i__26997__auto___30051 = G__30052;
continue;
} else {
}
break;
}

var G__30049 = args30047.length;
switch (G__30049) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30047.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args30054 = [];
var len__26996__auto___30057 = arguments.length;
var i__26997__auto___30058 = (0);
while(true){
if((i__26997__auto___30058 < len__26996__auto___30057)){
args30054.push((arguments[i__26997__auto___30058]));

var G__30059 = (i__26997__auto___30058 + (1));
i__26997__auto___30058 = G__30059;
continue;
} else {
}
break;
}

var G__30056 = args30054.length;
switch (G__30056) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30054.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args30061 = [];
var len__26996__auto___30132 = arguments.length;
var i__26997__auto___30133 = (0);
while(true){
if((i__26997__auto___30133 < len__26996__auto___30132)){
args30061.push((arguments[i__26997__auto___30133]));

var G__30134 = (i__26997__auto___30133 + (1));
i__26997__auto___30133 = G__30134;
continue;
} else {
}
break;
}

var G__30063 = args30061.length;
switch (G__30063) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30061.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28093__auto___30136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28093__auto___30136,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28094__auto__ = (function (){var switch__27981__auto__ = ((function (c__28093__auto___30136,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30102){
var state_val_30103 = (state_30102[(1)]);
if((state_val_30103 === (7))){
var state_30102__$1 = state_30102;
var statearr_30104_30137 = state_30102__$1;
(statearr_30104_30137[(2)] = null);

(statearr_30104_30137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (1))){
var state_30102__$1 = state_30102;
var statearr_30105_30138 = state_30102__$1;
(statearr_30105_30138[(2)] = null);

(statearr_30105_30138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (4))){
var inst_30066 = (state_30102[(7)]);
var inst_30068 = (inst_30066 < cnt);
var state_30102__$1 = state_30102;
if(cljs.core.truth_(inst_30068)){
var statearr_30106_30139 = state_30102__$1;
(statearr_30106_30139[(1)] = (6));

} else {
var statearr_30107_30140 = state_30102__$1;
(statearr_30107_30140[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (15))){
var inst_30098 = (state_30102[(2)]);
var state_30102__$1 = state_30102;
var statearr_30108_30141 = state_30102__$1;
(statearr_30108_30141[(2)] = inst_30098);

(statearr_30108_30141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (13))){
var inst_30091 = cljs.core.async.close_BANG_.call(null,out);
var state_30102__$1 = state_30102;
var statearr_30109_30142 = state_30102__$1;
(statearr_30109_30142[(2)] = inst_30091);

(statearr_30109_30142[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (6))){
var state_30102__$1 = state_30102;
var statearr_30110_30143 = state_30102__$1;
(statearr_30110_30143[(2)] = null);

(statearr_30110_30143[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (3))){
var inst_30100 = (state_30102[(2)]);
var state_30102__$1 = state_30102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30102__$1,inst_30100);
} else {
if((state_val_30103 === (12))){
var inst_30088 = (state_30102[(8)]);
var inst_30088__$1 = (state_30102[(2)]);
var inst_30089 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30088__$1);
var state_30102__$1 = (function (){var statearr_30111 = state_30102;
(statearr_30111[(8)] = inst_30088__$1);

return statearr_30111;
})();
if(cljs.core.truth_(inst_30089)){
var statearr_30112_30144 = state_30102__$1;
(statearr_30112_30144[(1)] = (13));

} else {
var statearr_30113_30145 = state_30102__$1;
(statearr_30113_30145[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (2))){
var inst_30065 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30066 = (0);
var state_30102__$1 = (function (){var statearr_30114 = state_30102;
(statearr_30114[(7)] = inst_30066);

(statearr_30114[(9)] = inst_30065);

return statearr_30114;
})();
var statearr_30115_30146 = state_30102__$1;
(statearr_30115_30146[(2)] = null);

(statearr_30115_30146[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (11))){
var inst_30066 = (state_30102[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30102,(10),Object,null,(9));
var inst_30075 = chs__$1.call(null,inst_30066);
var inst_30076 = done.call(null,inst_30066);
var inst_30077 = cljs.core.async.take_BANG_.call(null,inst_30075,inst_30076);
var state_30102__$1 = state_30102;
var statearr_30116_30147 = state_30102__$1;
(statearr_30116_30147[(2)] = inst_30077);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30102__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (9))){
var inst_30066 = (state_30102[(7)]);
var inst_30079 = (state_30102[(2)]);
var inst_30080 = (inst_30066 + (1));
var inst_30066__$1 = inst_30080;
var state_30102__$1 = (function (){var statearr_30117 = state_30102;
(statearr_30117[(7)] = inst_30066__$1);

(statearr_30117[(10)] = inst_30079);

return statearr_30117;
})();
var statearr_30118_30148 = state_30102__$1;
(statearr_30118_30148[(2)] = null);

(statearr_30118_30148[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (5))){
var inst_30086 = (state_30102[(2)]);
var state_30102__$1 = (function (){var statearr_30119 = state_30102;
(statearr_30119[(11)] = inst_30086);

return statearr_30119;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30102__$1,(12),dchan);
} else {
if((state_val_30103 === (14))){
var inst_30088 = (state_30102[(8)]);
var inst_30093 = cljs.core.apply.call(null,f,inst_30088);
var state_30102__$1 = state_30102;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30102__$1,(16),out,inst_30093);
} else {
if((state_val_30103 === (16))){
var inst_30095 = (state_30102[(2)]);
var state_30102__$1 = (function (){var statearr_30120 = state_30102;
(statearr_30120[(12)] = inst_30095);

return statearr_30120;
})();
var statearr_30121_30149 = state_30102__$1;
(statearr_30121_30149[(2)] = null);

(statearr_30121_30149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (10))){
var inst_30070 = (state_30102[(2)]);
var inst_30071 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30102__$1 = (function (){var statearr_30122 = state_30102;
(statearr_30122[(13)] = inst_30070);

return statearr_30122;
})();
var statearr_30123_30150 = state_30102__$1;
(statearr_30123_30150[(2)] = inst_30071);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30102__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30103 === (8))){
var inst_30084 = (state_30102[(2)]);
var state_30102__$1 = state_30102;
var statearr_30124_30151 = state_30102__$1;
(statearr_30124_30151[(2)] = inst_30084);

(statearr_30124_30151[(1)] = (5));


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
});})(c__28093__auto___30136,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27981__auto__,c__28093__auto___30136,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27982__auto__ = null;
var cljs$core$async$state_machine__27982__auto____0 = (function (){
var statearr_30128 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30128[(0)] = cljs$core$async$state_machine__27982__auto__);

(statearr_30128[(1)] = (1));

return statearr_30128;
});
var cljs$core$async$state_machine__27982__auto____1 = (function (state_30102){
while(true){
var ret_value__27983__auto__ = (function (){try{while(true){
var result__27984__auto__ = switch__27981__auto__.call(null,state_30102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27984__auto__;
}
break;
}
}catch (e30129){if((e30129 instanceof Object)){
var ex__27985__auto__ = e30129;
var statearr_30130_30152 = state_30102;
(statearr_30130_30152[(5)] = ex__27985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30153 = state_30102;
state_30102 = G__30153;
continue;
} else {
return ret_value__27983__auto__;
}
break;
}
});
cljs$core$async$state_machine__27982__auto__ = function(state_30102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27982__auto____1.call(this,state_30102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27982__auto____0;
cljs$core$async$state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27982__auto____1;
return cljs$core$async$state_machine__27982__auto__;
})()
;})(switch__27981__auto__,c__28093__auto___30136,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28095__auto__ = (function (){var statearr_30131 = f__28094__auto__.call(null);
(statearr_30131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28093__auto___30136);

return statearr_30131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28095__auto__);
});})(c__28093__auto___30136,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args30155 = [];
var len__26996__auto___30213 = arguments.length;
var i__26997__auto___30214 = (0);
while(true){
if((i__26997__auto___30214 < len__26996__auto___30213)){
args30155.push((arguments[i__26997__auto___30214]));

var G__30215 = (i__26997__auto___30214 + (1));
i__26997__auto___30214 = G__30215;
continue;
} else {
}
break;
}

var G__30157 = args30155.length;
switch (G__30157) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30155.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28093__auto___30217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28093__auto___30217,out){
return (function (){
var f__28094__auto__ = (function (){var switch__27981__auto__ = ((function (c__28093__auto___30217,out){
return (function (state_30189){
var state_val_30190 = (state_30189[(1)]);
if((state_val_30190 === (7))){
var inst_30169 = (state_30189[(7)]);
var inst_30168 = (state_30189[(8)]);
var inst_30168__$1 = (state_30189[(2)]);
var inst_30169__$1 = cljs.core.nth.call(null,inst_30168__$1,(0),null);
var inst_30170 = cljs.core.nth.call(null,inst_30168__$1,(1),null);
var inst_30171 = (inst_30169__$1 == null);
var state_30189__$1 = (function (){var statearr_30191 = state_30189;
(statearr_30191[(7)] = inst_30169__$1);

(statearr_30191[(9)] = inst_30170);

(statearr_30191[(8)] = inst_30168__$1);

return statearr_30191;
})();
if(cljs.core.truth_(inst_30171)){
var statearr_30192_30218 = state_30189__$1;
(statearr_30192_30218[(1)] = (8));

} else {
var statearr_30193_30219 = state_30189__$1;
(statearr_30193_30219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (1))){
var inst_30158 = cljs.core.vec.call(null,chs);
var inst_30159 = inst_30158;
var state_30189__$1 = (function (){var statearr_30194 = state_30189;
(statearr_30194[(10)] = inst_30159);

return statearr_30194;
})();
var statearr_30195_30220 = state_30189__$1;
(statearr_30195_30220[(2)] = null);

(statearr_30195_30220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (4))){
var inst_30159 = (state_30189[(10)]);
var state_30189__$1 = state_30189;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30189__$1,(7),inst_30159);
} else {
if((state_val_30190 === (6))){
var inst_30185 = (state_30189[(2)]);
var state_30189__$1 = state_30189;
var statearr_30196_30221 = state_30189__$1;
(statearr_30196_30221[(2)] = inst_30185);

(statearr_30196_30221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (3))){
var inst_30187 = (state_30189[(2)]);
var state_30189__$1 = state_30189;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30189__$1,inst_30187);
} else {
if((state_val_30190 === (2))){
var inst_30159 = (state_30189[(10)]);
var inst_30161 = cljs.core.count.call(null,inst_30159);
var inst_30162 = (inst_30161 > (0));
var state_30189__$1 = state_30189;
if(cljs.core.truth_(inst_30162)){
var statearr_30198_30222 = state_30189__$1;
(statearr_30198_30222[(1)] = (4));

} else {
var statearr_30199_30223 = state_30189__$1;
(statearr_30199_30223[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (11))){
var inst_30159 = (state_30189[(10)]);
var inst_30178 = (state_30189[(2)]);
var tmp30197 = inst_30159;
var inst_30159__$1 = tmp30197;
var state_30189__$1 = (function (){var statearr_30200 = state_30189;
(statearr_30200[(10)] = inst_30159__$1);

(statearr_30200[(11)] = inst_30178);

return statearr_30200;
})();
var statearr_30201_30224 = state_30189__$1;
(statearr_30201_30224[(2)] = null);

(statearr_30201_30224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (9))){
var inst_30169 = (state_30189[(7)]);
var state_30189__$1 = state_30189;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30189__$1,(11),out,inst_30169);
} else {
if((state_val_30190 === (5))){
var inst_30183 = cljs.core.async.close_BANG_.call(null,out);
var state_30189__$1 = state_30189;
var statearr_30202_30225 = state_30189__$1;
(statearr_30202_30225[(2)] = inst_30183);

(statearr_30202_30225[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (10))){
var inst_30181 = (state_30189[(2)]);
var state_30189__$1 = state_30189;
var statearr_30203_30226 = state_30189__$1;
(statearr_30203_30226[(2)] = inst_30181);

(statearr_30203_30226[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30190 === (8))){
var inst_30169 = (state_30189[(7)]);
var inst_30170 = (state_30189[(9)]);
var inst_30159 = (state_30189[(10)]);
var inst_30168 = (state_30189[(8)]);
var inst_30173 = (function (){var cs = inst_30159;
var vec__30164 = inst_30168;
var v = inst_30169;
var c = inst_30170;
return ((function (cs,vec__30164,v,c,inst_30169,inst_30170,inst_30159,inst_30168,state_val_30190,c__28093__auto___30217,out){
return (function (p1__30154_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30154_SHARP_);
});
;})(cs,vec__30164,v,c,inst_30169,inst_30170,inst_30159,inst_30168,state_val_30190,c__28093__auto___30217,out))
})();
var inst_30174 = cljs.core.filterv.call(null,inst_30173,inst_30159);
var inst_30159__$1 = inst_30174;
var state_30189__$1 = (function (){var statearr_30204 = state_30189;
(statearr_30204[(10)] = inst_30159__$1);

return statearr_30204;
})();
var statearr_30205_30227 = state_30189__$1;
(statearr_30205_30227[(2)] = null);

(statearr_30205_30227[(1)] = (2));


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
});})(c__28093__auto___30217,out))
;
return ((function (switch__27981__auto__,c__28093__auto___30217,out){
return (function() {
var cljs$core$async$state_machine__27982__auto__ = null;
var cljs$core$async$state_machine__27982__auto____0 = (function (){
var statearr_30209 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30209[(0)] = cljs$core$async$state_machine__27982__auto__);

(statearr_30209[(1)] = (1));

return statearr_30209;
});
var cljs$core$async$state_machine__27982__auto____1 = (function (state_30189){
while(true){
var ret_value__27983__auto__ = (function (){try{while(true){
var result__27984__auto__ = switch__27981__auto__.call(null,state_30189);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27984__auto__;
}
break;
}
}catch (e30210){if((e30210 instanceof Object)){
var ex__27985__auto__ = e30210;
var statearr_30211_30228 = state_30189;
(statearr_30211_30228[(5)] = ex__27985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30229 = state_30189;
state_30189 = G__30229;
continue;
} else {
return ret_value__27983__auto__;
}
break;
}
});
cljs$core$async$state_machine__27982__auto__ = function(state_30189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27982__auto____1.call(this,state_30189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27982__auto____0;
cljs$core$async$state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27982__auto____1;
return cljs$core$async$state_machine__27982__auto__;
})()
;})(switch__27981__auto__,c__28093__auto___30217,out))
})();
var state__28095__auto__ = (function (){var statearr_30212 = f__28094__auto__.call(null);
(statearr_30212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28093__auto___30217);

return statearr_30212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28095__auto__);
});})(c__28093__auto___30217,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args30230 = [];
var len__26996__auto___30279 = arguments.length;
var i__26997__auto___30280 = (0);
while(true){
if((i__26997__auto___30280 < len__26996__auto___30279)){
args30230.push((arguments[i__26997__auto___30280]));

var G__30281 = (i__26997__auto___30280 + (1));
i__26997__auto___30280 = G__30281;
continue;
} else {
}
break;
}

var G__30232 = args30230.length;
switch (G__30232) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30230.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28093__auto___30283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28093__auto___30283,out){
return (function (){
var f__28094__auto__ = (function (){var switch__27981__auto__ = ((function (c__28093__auto___30283,out){
return (function (state_30256){
var state_val_30257 = (state_30256[(1)]);
if((state_val_30257 === (7))){
var inst_30238 = (state_30256[(7)]);
var inst_30238__$1 = (state_30256[(2)]);
var inst_30239 = (inst_30238__$1 == null);
var inst_30240 = cljs.core.not.call(null,inst_30239);
var state_30256__$1 = (function (){var statearr_30258 = state_30256;
(statearr_30258[(7)] = inst_30238__$1);

return statearr_30258;
})();
if(inst_30240){
var statearr_30259_30284 = state_30256__$1;
(statearr_30259_30284[(1)] = (8));

} else {
var statearr_30260_30285 = state_30256__$1;
(statearr_30260_30285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30257 === (1))){
var inst_30233 = (0);
var state_30256__$1 = (function (){var statearr_30261 = state_30256;
(statearr_30261[(8)] = inst_30233);

return statearr_30261;
})();
var statearr_30262_30286 = state_30256__$1;
(statearr_30262_30286[(2)] = null);

(statearr_30262_30286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30257 === (4))){
var state_30256__$1 = state_30256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30256__$1,(7),ch);
} else {
if((state_val_30257 === (6))){
var inst_30251 = (state_30256[(2)]);
var state_30256__$1 = state_30256;
var statearr_30263_30287 = state_30256__$1;
(statearr_30263_30287[(2)] = inst_30251);

(statearr_30263_30287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30257 === (3))){
var inst_30253 = (state_30256[(2)]);
var inst_30254 = cljs.core.async.close_BANG_.call(null,out);
var state_30256__$1 = (function (){var statearr_30264 = state_30256;
(statearr_30264[(9)] = inst_30253);

return statearr_30264;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30256__$1,inst_30254);
} else {
if((state_val_30257 === (2))){
var inst_30233 = (state_30256[(8)]);
var inst_30235 = (inst_30233 < n);
var state_30256__$1 = state_30256;
if(cljs.core.truth_(inst_30235)){
var statearr_30265_30288 = state_30256__$1;
(statearr_30265_30288[(1)] = (4));

} else {
var statearr_30266_30289 = state_30256__$1;
(statearr_30266_30289[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30257 === (11))){
var inst_30233 = (state_30256[(8)]);
var inst_30243 = (state_30256[(2)]);
var inst_30244 = (inst_30233 + (1));
var inst_30233__$1 = inst_30244;
var state_30256__$1 = (function (){var statearr_30267 = state_30256;
(statearr_30267[(10)] = inst_30243);

(statearr_30267[(8)] = inst_30233__$1);

return statearr_30267;
})();
var statearr_30268_30290 = state_30256__$1;
(statearr_30268_30290[(2)] = null);

(statearr_30268_30290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30257 === (9))){
var state_30256__$1 = state_30256;
var statearr_30269_30291 = state_30256__$1;
(statearr_30269_30291[(2)] = null);

(statearr_30269_30291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30257 === (5))){
var state_30256__$1 = state_30256;
var statearr_30270_30292 = state_30256__$1;
(statearr_30270_30292[(2)] = null);

(statearr_30270_30292[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30257 === (10))){
var inst_30248 = (state_30256[(2)]);
var state_30256__$1 = state_30256;
var statearr_30271_30293 = state_30256__$1;
(statearr_30271_30293[(2)] = inst_30248);

(statearr_30271_30293[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30257 === (8))){
var inst_30238 = (state_30256[(7)]);
var state_30256__$1 = state_30256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30256__$1,(11),out,inst_30238);
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
});})(c__28093__auto___30283,out))
;
return ((function (switch__27981__auto__,c__28093__auto___30283,out){
return (function() {
var cljs$core$async$state_machine__27982__auto__ = null;
var cljs$core$async$state_machine__27982__auto____0 = (function (){
var statearr_30275 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30275[(0)] = cljs$core$async$state_machine__27982__auto__);

(statearr_30275[(1)] = (1));

return statearr_30275;
});
var cljs$core$async$state_machine__27982__auto____1 = (function (state_30256){
while(true){
var ret_value__27983__auto__ = (function (){try{while(true){
var result__27984__auto__ = switch__27981__auto__.call(null,state_30256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27984__auto__;
}
break;
}
}catch (e30276){if((e30276 instanceof Object)){
var ex__27985__auto__ = e30276;
var statearr_30277_30294 = state_30256;
(statearr_30277_30294[(5)] = ex__27985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30295 = state_30256;
state_30256 = G__30295;
continue;
} else {
return ret_value__27983__auto__;
}
break;
}
});
cljs$core$async$state_machine__27982__auto__ = function(state_30256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27982__auto____1.call(this,state_30256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27982__auto____0;
cljs$core$async$state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27982__auto____1;
return cljs$core$async$state_machine__27982__auto__;
})()
;})(switch__27981__auto__,c__28093__auto___30283,out))
})();
var state__28095__auto__ = (function (){var statearr_30278 = f__28094__auto__.call(null);
(statearr_30278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28093__auto___30283);

return statearr_30278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28095__auto__);
});})(c__28093__auto___30283,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30303 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30303 = (function (f,ch,meta30304){
this.f = f;
this.ch = ch;
this.meta30304 = meta30304;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30305,meta30304__$1){
var self__ = this;
var _30305__$1 = this;
return (new cljs.core.async.t_cljs$core$async30303(self__.f,self__.ch,meta30304__$1));
});

cljs.core.async.t_cljs$core$async30303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30305){
var self__ = this;
var _30305__$1 = this;
return self__.meta30304;
});

cljs.core.async.t_cljs$core$async30303.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30303.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30303.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30303.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30303.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30306 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30306 = (function (f,ch,meta30304,_,fn1,meta30307){
this.f = f;
this.ch = ch;
this.meta30304 = meta30304;
this._ = _;
this.fn1 = fn1;
this.meta30307 = meta30307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30308,meta30307__$1){
var self__ = this;
var _30308__$1 = this;
return (new cljs.core.async.t_cljs$core$async30306(self__.f,self__.ch,self__.meta30304,self__._,self__.fn1,meta30307__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30306.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30308){
var self__ = this;
var _30308__$1 = this;
return self__.meta30307;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30306.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30306.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30306.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30306.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30296_SHARP_){
return f1.call(null,(((p1__30296_SHARP_ == null))?null:self__.f.call(null,p1__30296_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30306.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30304","meta30304",460770804,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30303","cljs.core.async/t_cljs$core$async30303",-714421536,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30307","meta30307",1276656583,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30306.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30306";

cljs.core.async.t_cljs$core$async30306.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26494__auto__,writer__26495__auto__,opt__26496__auto__){
return cljs.core._write.call(null,writer__26495__auto__,"cljs.core.async/t_cljs$core$async30306");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30306 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30306(f__$1,ch__$1,meta30304__$1,___$2,fn1__$1,meta30307){
return (new cljs.core.async.t_cljs$core$async30306(f__$1,ch__$1,meta30304__$1,___$2,fn1__$1,meta30307));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30306(self__.f,self__.ch,self__.meta30304,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25876__auto__ = ret;
if(cljs.core.truth_(and__25876__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25876__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30303.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30303.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30303.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30304","meta30304",460770804,null)], null);
});

cljs.core.async.t_cljs$core$async30303.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30303.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30303";

cljs.core.async.t_cljs$core$async30303.cljs$lang$ctorPrWriter = (function (this__26494__auto__,writer__26495__auto__,opt__26496__auto__){
return cljs.core._write.call(null,writer__26495__auto__,"cljs.core.async/t_cljs$core$async30303");
});

cljs.core.async.__GT_t_cljs$core$async30303 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30303(f__$1,ch__$1,meta30304){
return (new cljs.core.async.t_cljs$core$async30303(f__$1,ch__$1,meta30304));
});

}

return (new cljs.core.async.t_cljs$core$async30303(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30312 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30312 = (function (f,ch,meta30313){
this.f = f;
this.ch = ch;
this.meta30313 = meta30313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30314,meta30313__$1){
var self__ = this;
var _30314__$1 = this;
return (new cljs.core.async.t_cljs$core$async30312(self__.f,self__.ch,meta30313__$1));
});

cljs.core.async.t_cljs$core$async30312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30314){
var self__ = this;
var _30314__$1 = this;
return self__.meta30313;
});

cljs.core.async.t_cljs$core$async30312.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30312.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30312.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30312.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30312.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30312.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30313","meta30313",-468078773,null)], null);
});

cljs.core.async.t_cljs$core$async30312.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30312";

cljs.core.async.t_cljs$core$async30312.cljs$lang$ctorPrWriter = (function (this__26494__auto__,writer__26495__auto__,opt__26496__auto__){
return cljs.core._write.call(null,writer__26495__auto__,"cljs.core.async/t_cljs$core$async30312");
});

cljs.core.async.__GT_t_cljs$core$async30312 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30312(f__$1,ch__$1,meta30313){
return (new cljs.core.async.t_cljs$core$async30312(f__$1,ch__$1,meta30313));
});

}

return (new cljs.core.async.t_cljs$core$async30312(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30318 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30318 = (function (p,ch,meta30319){
this.p = p;
this.ch = ch;
this.meta30319 = meta30319;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30320,meta30319__$1){
var self__ = this;
var _30320__$1 = this;
return (new cljs.core.async.t_cljs$core$async30318(self__.p,self__.ch,meta30319__$1));
});

cljs.core.async.t_cljs$core$async30318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30320){
var self__ = this;
var _30320__$1 = this;
return self__.meta30319;
});

cljs.core.async.t_cljs$core$async30318.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30318.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30318.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30318.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30318.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30318.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30318.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30318.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30319","meta30319",682251172,null)], null);
});

cljs.core.async.t_cljs$core$async30318.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30318.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30318";

cljs.core.async.t_cljs$core$async30318.cljs$lang$ctorPrWriter = (function (this__26494__auto__,writer__26495__auto__,opt__26496__auto__){
return cljs.core._write.call(null,writer__26495__auto__,"cljs.core.async/t_cljs$core$async30318");
});

cljs.core.async.__GT_t_cljs$core$async30318 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30318(p__$1,ch__$1,meta30319){
return (new cljs.core.async.t_cljs$core$async30318(p__$1,ch__$1,meta30319));
});

}

return (new cljs.core.async.t_cljs$core$async30318(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args30321 = [];
var len__26996__auto___30365 = arguments.length;
var i__26997__auto___30366 = (0);
while(true){
if((i__26997__auto___30366 < len__26996__auto___30365)){
args30321.push((arguments[i__26997__auto___30366]));

var G__30367 = (i__26997__auto___30366 + (1));
i__26997__auto___30366 = G__30367;
continue;
} else {
}
break;
}

var G__30323 = args30321.length;
switch (G__30323) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30321.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28093__auto___30369 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28093__auto___30369,out){
return (function (){
var f__28094__auto__ = (function (){var switch__27981__auto__ = ((function (c__28093__auto___30369,out){
return (function (state_30344){
var state_val_30345 = (state_30344[(1)]);
if((state_val_30345 === (7))){
var inst_30340 = (state_30344[(2)]);
var state_30344__$1 = state_30344;
var statearr_30346_30370 = state_30344__$1;
(statearr_30346_30370[(2)] = inst_30340);

(statearr_30346_30370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (1))){
var state_30344__$1 = state_30344;
var statearr_30347_30371 = state_30344__$1;
(statearr_30347_30371[(2)] = null);

(statearr_30347_30371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (4))){
var inst_30326 = (state_30344[(7)]);
var inst_30326__$1 = (state_30344[(2)]);
var inst_30327 = (inst_30326__$1 == null);
var state_30344__$1 = (function (){var statearr_30348 = state_30344;
(statearr_30348[(7)] = inst_30326__$1);

return statearr_30348;
})();
if(cljs.core.truth_(inst_30327)){
var statearr_30349_30372 = state_30344__$1;
(statearr_30349_30372[(1)] = (5));

} else {
var statearr_30350_30373 = state_30344__$1;
(statearr_30350_30373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (6))){
var inst_30326 = (state_30344[(7)]);
var inst_30331 = p.call(null,inst_30326);
var state_30344__$1 = state_30344;
if(cljs.core.truth_(inst_30331)){
var statearr_30351_30374 = state_30344__$1;
(statearr_30351_30374[(1)] = (8));

} else {
var statearr_30352_30375 = state_30344__$1;
(statearr_30352_30375[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (3))){
var inst_30342 = (state_30344[(2)]);
var state_30344__$1 = state_30344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30344__$1,inst_30342);
} else {
if((state_val_30345 === (2))){
var state_30344__$1 = state_30344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30344__$1,(4),ch);
} else {
if((state_val_30345 === (11))){
var inst_30334 = (state_30344[(2)]);
var state_30344__$1 = state_30344;
var statearr_30353_30376 = state_30344__$1;
(statearr_30353_30376[(2)] = inst_30334);

(statearr_30353_30376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (9))){
var state_30344__$1 = state_30344;
var statearr_30354_30377 = state_30344__$1;
(statearr_30354_30377[(2)] = null);

(statearr_30354_30377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (5))){
var inst_30329 = cljs.core.async.close_BANG_.call(null,out);
var state_30344__$1 = state_30344;
var statearr_30355_30378 = state_30344__$1;
(statearr_30355_30378[(2)] = inst_30329);

(statearr_30355_30378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (10))){
var inst_30337 = (state_30344[(2)]);
var state_30344__$1 = (function (){var statearr_30356 = state_30344;
(statearr_30356[(8)] = inst_30337);

return statearr_30356;
})();
var statearr_30357_30379 = state_30344__$1;
(statearr_30357_30379[(2)] = null);

(statearr_30357_30379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30345 === (8))){
var inst_30326 = (state_30344[(7)]);
var state_30344__$1 = state_30344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30344__$1,(11),out,inst_30326);
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
});})(c__28093__auto___30369,out))
;
return ((function (switch__27981__auto__,c__28093__auto___30369,out){
return (function() {
var cljs$core$async$state_machine__27982__auto__ = null;
var cljs$core$async$state_machine__27982__auto____0 = (function (){
var statearr_30361 = [null,null,null,null,null,null,null,null,null];
(statearr_30361[(0)] = cljs$core$async$state_machine__27982__auto__);

(statearr_30361[(1)] = (1));

return statearr_30361;
});
var cljs$core$async$state_machine__27982__auto____1 = (function (state_30344){
while(true){
var ret_value__27983__auto__ = (function (){try{while(true){
var result__27984__auto__ = switch__27981__auto__.call(null,state_30344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27984__auto__;
}
break;
}
}catch (e30362){if((e30362 instanceof Object)){
var ex__27985__auto__ = e30362;
var statearr_30363_30380 = state_30344;
(statearr_30363_30380[(5)] = ex__27985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30381 = state_30344;
state_30344 = G__30381;
continue;
} else {
return ret_value__27983__auto__;
}
break;
}
});
cljs$core$async$state_machine__27982__auto__ = function(state_30344){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27982__auto____1.call(this,state_30344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27982__auto____0;
cljs$core$async$state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27982__auto____1;
return cljs$core$async$state_machine__27982__auto__;
})()
;})(switch__27981__auto__,c__28093__auto___30369,out))
})();
var state__28095__auto__ = (function (){var statearr_30364 = f__28094__auto__.call(null);
(statearr_30364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28093__auto___30369);

return statearr_30364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28095__auto__);
});})(c__28093__auto___30369,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30382 = [];
var len__26996__auto___30385 = arguments.length;
var i__26997__auto___30386 = (0);
while(true){
if((i__26997__auto___30386 < len__26996__auto___30385)){
args30382.push((arguments[i__26997__auto___30386]));

var G__30387 = (i__26997__auto___30386 + (1));
i__26997__auto___30386 = G__30387;
continue;
} else {
}
break;
}

var G__30384 = args30382.length;
switch (G__30384) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30382.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28093__auto__){
return (function (){
var f__28094__auto__ = (function (){var switch__27981__auto__ = ((function (c__28093__auto__){
return (function (state_30554){
var state_val_30555 = (state_30554[(1)]);
if((state_val_30555 === (7))){
var inst_30550 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
var statearr_30556_30597 = state_30554__$1;
(statearr_30556_30597[(2)] = inst_30550);

(statearr_30556_30597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (20))){
var inst_30520 = (state_30554[(7)]);
var inst_30531 = (state_30554[(2)]);
var inst_30532 = cljs.core.next.call(null,inst_30520);
var inst_30506 = inst_30532;
var inst_30507 = null;
var inst_30508 = (0);
var inst_30509 = (0);
var state_30554__$1 = (function (){var statearr_30557 = state_30554;
(statearr_30557[(8)] = inst_30508);

(statearr_30557[(9)] = inst_30509);

(statearr_30557[(10)] = inst_30507);

(statearr_30557[(11)] = inst_30506);

(statearr_30557[(12)] = inst_30531);

return statearr_30557;
})();
var statearr_30558_30598 = state_30554__$1;
(statearr_30558_30598[(2)] = null);

(statearr_30558_30598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (1))){
var state_30554__$1 = state_30554;
var statearr_30559_30599 = state_30554__$1;
(statearr_30559_30599[(2)] = null);

(statearr_30559_30599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (4))){
var inst_30495 = (state_30554[(13)]);
var inst_30495__$1 = (state_30554[(2)]);
var inst_30496 = (inst_30495__$1 == null);
var state_30554__$1 = (function (){var statearr_30560 = state_30554;
(statearr_30560[(13)] = inst_30495__$1);

return statearr_30560;
})();
if(cljs.core.truth_(inst_30496)){
var statearr_30561_30600 = state_30554__$1;
(statearr_30561_30600[(1)] = (5));

} else {
var statearr_30562_30601 = state_30554__$1;
(statearr_30562_30601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (15))){
var state_30554__$1 = state_30554;
var statearr_30566_30602 = state_30554__$1;
(statearr_30566_30602[(2)] = null);

(statearr_30566_30602[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (21))){
var state_30554__$1 = state_30554;
var statearr_30567_30603 = state_30554__$1;
(statearr_30567_30603[(2)] = null);

(statearr_30567_30603[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (13))){
var inst_30508 = (state_30554[(8)]);
var inst_30509 = (state_30554[(9)]);
var inst_30507 = (state_30554[(10)]);
var inst_30506 = (state_30554[(11)]);
var inst_30516 = (state_30554[(2)]);
var inst_30517 = (inst_30509 + (1));
var tmp30563 = inst_30508;
var tmp30564 = inst_30507;
var tmp30565 = inst_30506;
var inst_30506__$1 = tmp30565;
var inst_30507__$1 = tmp30564;
var inst_30508__$1 = tmp30563;
var inst_30509__$1 = inst_30517;
var state_30554__$1 = (function (){var statearr_30568 = state_30554;
(statearr_30568[(8)] = inst_30508__$1);

(statearr_30568[(14)] = inst_30516);

(statearr_30568[(9)] = inst_30509__$1);

(statearr_30568[(10)] = inst_30507__$1);

(statearr_30568[(11)] = inst_30506__$1);

return statearr_30568;
})();
var statearr_30569_30604 = state_30554__$1;
(statearr_30569_30604[(2)] = null);

(statearr_30569_30604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (22))){
var state_30554__$1 = state_30554;
var statearr_30570_30605 = state_30554__$1;
(statearr_30570_30605[(2)] = null);

(statearr_30570_30605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (6))){
var inst_30495 = (state_30554[(13)]);
var inst_30504 = f.call(null,inst_30495);
var inst_30505 = cljs.core.seq.call(null,inst_30504);
var inst_30506 = inst_30505;
var inst_30507 = null;
var inst_30508 = (0);
var inst_30509 = (0);
var state_30554__$1 = (function (){var statearr_30571 = state_30554;
(statearr_30571[(8)] = inst_30508);

(statearr_30571[(9)] = inst_30509);

(statearr_30571[(10)] = inst_30507);

(statearr_30571[(11)] = inst_30506);

return statearr_30571;
})();
var statearr_30572_30606 = state_30554__$1;
(statearr_30572_30606[(2)] = null);

(statearr_30572_30606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (17))){
var inst_30520 = (state_30554[(7)]);
var inst_30524 = cljs.core.chunk_first.call(null,inst_30520);
var inst_30525 = cljs.core.chunk_rest.call(null,inst_30520);
var inst_30526 = cljs.core.count.call(null,inst_30524);
var inst_30506 = inst_30525;
var inst_30507 = inst_30524;
var inst_30508 = inst_30526;
var inst_30509 = (0);
var state_30554__$1 = (function (){var statearr_30573 = state_30554;
(statearr_30573[(8)] = inst_30508);

(statearr_30573[(9)] = inst_30509);

(statearr_30573[(10)] = inst_30507);

(statearr_30573[(11)] = inst_30506);

return statearr_30573;
})();
var statearr_30574_30607 = state_30554__$1;
(statearr_30574_30607[(2)] = null);

(statearr_30574_30607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (3))){
var inst_30552 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30554__$1,inst_30552);
} else {
if((state_val_30555 === (12))){
var inst_30540 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
var statearr_30575_30608 = state_30554__$1;
(statearr_30575_30608[(2)] = inst_30540);

(statearr_30575_30608[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (2))){
var state_30554__$1 = state_30554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30554__$1,(4),in$);
} else {
if((state_val_30555 === (23))){
var inst_30548 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
var statearr_30576_30609 = state_30554__$1;
(statearr_30576_30609[(2)] = inst_30548);

(statearr_30576_30609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (19))){
var inst_30535 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
var statearr_30577_30610 = state_30554__$1;
(statearr_30577_30610[(2)] = inst_30535);

(statearr_30577_30610[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (11))){
var inst_30520 = (state_30554[(7)]);
var inst_30506 = (state_30554[(11)]);
var inst_30520__$1 = cljs.core.seq.call(null,inst_30506);
var state_30554__$1 = (function (){var statearr_30578 = state_30554;
(statearr_30578[(7)] = inst_30520__$1);

return statearr_30578;
})();
if(inst_30520__$1){
var statearr_30579_30611 = state_30554__$1;
(statearr_30579_30611[(1)] = (14));

} else {
var statearr_30580_30612 = state_30554__$1;
(statearr_30580_30612[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (9))){
var inst_30542 = (state_30554[(2)]);
var inst_30543 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30554__$1 = (function (){var statearr_30581 = state_30554;
(statearr_30581[(15)] = inst_30542);

return statearr_30581;
})();
if(cljs.core.truth_(inst_30543)){
var statearr_30582_30613 = state_30554__$1;
(statearr_30582_30613[(1)] = (21));

} else {
var statearr_30583_30614 = state_30554__$1;
(statearr_30583_30614[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (5))){
var inst_30498 = cljs.core.async.close_BANG_.call(null,out);
var state_30554__$1 = state_30554;
var statearr_30584_30615 = state_30554__$1;
(statearr_30584_30615[(2)] = inst_30498);

(statearr_30584_30615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (14))){
var inst_30520 = (state_30554[(7)]);
var inst_30522 = cljs.core.chunked_seq_QMARK_.call(null,inst_30520);
var state_30554__$1 = state_30554;
if(inst_30522){
var statearr_30585_30616 = state_30554__$1;
(statearr_30585_30616[(1)] = (17));

} else {
var statearr_30586_30617 = state_30554__$1;
(statearr_30586_30617[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (16))){
var inst_30538 = (state_30554[(2)]);
var state_30554__$1 = state_30554;
var statearr_30587_30618 = state_30554__$1;
(statearr_30587_30618[(2)] = inst_30538);

(statearr_30587_30618[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30555 === (10))){
var inst_30509 = (state_30554[(9)]);
var inst_30507 = (state_30554[(10)]);
var inst_30514 = cljs.core._nth.call(null,inst_30507,inst_30509);
var state_30554__$1 = state_30554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30554__$1,(13),out,inst_30514);
} else {
if((state_val_30555 === (18))){
var inst_30520 = (state_30554[(7)]);
var inst_30529 = cljs.core.first.call(null,inst_30520);
var state_30554__$1 = state_30554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30554__$1,(20),out,inst_30529);
} else {
if((state_val_30555 === (8))){
var inst_30508 = (state_30554[(8)]);
var inst_30509 = (state_30554[(9)]);
var inst_30511 = (inst_30509 < inst_30508);
var inst_30512 = inst_30511;
var state_30554__$1 = state_30554;
if(cljs.core.truth_(inst_30512)){
var statearr_30588_30619 = state_30554__$1;
(statearr_30588_30619[(1)] = (10));

} else {
var statearr_30589_30620 = state_30554__$1;
(statearr_30589_30620[(1)] = (11));

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
}
}
}
}
}
}
});})(c__28093__auto__))
;
return ((function (switch__27981__auto__,c__28093__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27982__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27982__auto____0 = (function (){
var statearr_30593 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30593[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27982__auto__);

(statearr_30593[(1)] = (1));

return statearr_30593;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27982__auto____1 = (function (state_30554){
while(true){
var ret_value__27983__auto__ = (function (){try{while(true){
var result__27984__auto__ = switch__27981__auto__.call(null,state_30554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27984__auto__;
}
break;
}
}catch (e30594){if((e30594 instanceof Object)){
var ex__27985__auto__ = e30594;
var statearr_30595_30621 = state_30554;
(statearr_30595_30621[(5)] = ex__27985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30622 = state_30554;
state_30554 = G__30622;
continue;
} else {
return ret_value__27983__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27982__auto__ = function(state_30554){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27982__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27982__auto____1.call(this,state_30554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27982__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27982__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27982__auto__;
})()
;})(switch__27981__auto__,c__28093__auto__))
})();
var state__28095__auto__ = (function (){var statearr_30596 = f__28094__auto__.call(null);
(statearr_30596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28093__auto__);

return statearr_30596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28095__auto__);
});})(c__28093__auto__))
);

return c__28093__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30623 = [];
var len__26996__auto___30626 = arguments.length;
var i__26997__auto___30627 = (0);
while(true){
if((i__26997__auto___30627 < len__26996__auto___30626)){
args30623.push((arguments[i__26997__auto___30627]));

var G__30628 = (i__26997__auto___30627 + (1));
i__26997__auto___30627 = G__30628;
continue;
} else {
}
break;
}

var G__30625 = args30623.length;
switch (G__30625) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30623.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args30630 = [];
var len__26996__auto___30633 = arguments.length;
var i__26997__auto___30634 = (0);
while(true){
if((i__26997__auto___30634 < len__26996__auto___30633)){
args30630.push((arguments[i__26997__auto___30634]));

var G__30635 = (i__26997__auto___30634 + (1));
i__26997__auto___30634 = G__30635;
continue;
} else {
}
break;
}

var G__30632 = args30630.length;
switch (G__30632) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30630.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args30637 = [];
var len__26996__auto___30688 = arguments.length;
var i__26997__auto___30689 = (0);
while(true){
if((i__26997__auto___30689 < len__26996__auto___30688)){
args30637.push((arguments[i__26997__auto___30689]));

var G__30690 = (i__26997__auto___30689 + (1));
i__26997__auto___30689 = G__30690;
continue;
} else {
}
break;
}

var G__30639 = args30637.length;
switch (G__30639) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30637.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28093__auto___30692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28093__auto___30692,out){
return (function (){
var f__28094__auto__ = (function (){var switch__27981__auto__ = ((function (c__28093__auto___30692,out){
return (function (state_30663){
var state_val_30664 = (state_30663[(1)]);
if((state_val_30664 === (7))){
var inst_30658 = (state_30663[(2)]);
var state_30663__$1 = state_30663;
var statearr_30665_30693 = state_30663__$1;
(statearr_30665_30693[(2)] = inst_30658);

(statearr_30665_30693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30664 === (1))){
var inst_30640 = null;
var state_30663__$1 = (function (){var statearr_30666 = state_30663;
(statearr_30666[(7)] = inst_30640);

return statearr_30666;
})();
var statearr_30667_30694 = state_30663__$1;
(statearr_30667_30694[(2)] = null);

(statearr_30667_30694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30664 === (4))){
var inst_30643 = (state_30663[(8)]);
var inst_30643__$1 = (state_30663[(2)]);
var inst_30644 = (inst_30643__$1 == null);
var inst_30645 = cljs.core.not.call(null,inst_30644);
var state_30663__$1 = (function (){var statearr_30668 = state_30663;
(statearr_30668[(8)] = inst_30643__$1);

return statearr_30668;
})();
if(inst_30645){
var statearr_30669_30695 = state_30663__$1;
(statearr_30669_30695[(1)] = (5));

} else {
var statearr_30670_30696 = state_30663__$1;
(statearr_30670_30696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30664 === (6))){
var state_30663__$1 = state_30663;
var statearr_30671_30697 = state_30663__$1;
(statearr_30671_30697[(2)] = null);

(statearr_30671_30697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30664 === (3))){
var inst_30660 = (state_30663[(2)]);
var inst_30661 = cljs.core.async.close_BANG_.call(null,out);
var state_30663__$1 = (function (){var statearr_30672 = state_30663;
(statearr_30672[(9)] = inst_30660);

return statearr_30672;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30663__$1,inst_30661);
} else {
if((state_val_30664 === (2))){
var state_30663__$1 = state_30663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30663__$1,(4),ch);
} else {
if((state_val_30664 === (11))){
var inst_30643 = (state_30663[(8)]);
var inst_30652 = (state_30663[(2)]);
var inst_30640 = inst_30643;
var state_30663__$1 = (function (){var statearr_30673 = state_30663;
(statearr_30673[(10)] = inst_30652);

(statearr_30673[(7)] = inst_30640);

return statearr_30673;
})();
var statearr_30674_30698 = state_30663__$1;
(statearr_30674_30698[(2)] = null);

(statearr_30674_30698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30664 === (9))){
var inst_30643 = (state_30663[(8)]);
var state_30663__$1 = state_30663;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30663__$1,(11),out,inst_30643);
} else {
if((state_val_30664 === (5))){
var inst_30643 = (state_30663[(8)]);
var inst_30640 = (state_30663[(7)]);
var inst_30647 = cljs.core._EQ_.call(null,inst_30643,inst_30640);
var state_30663__$1 = state_30663;
if(inst_30647){
var statearr_30676_30699 = state_30663__$1;
(statearr_30676_30699[(1)] = (8));

} else {
var statearr_30677_30700 = state_30663__$1;
(statearr_30677_30700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30664 === (10))){
var inst_30655 = (state_30663[(2)]);
var state_30663__$1 = state_30663;
var statearr_30678_30701 = state_30663__$1;
(statearr_30678_30701[(2)] = inst_30655);

(statearr_30678_30701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30664 === (8))){
var inst_30640 = (state_30663[(7)]);
var tmp30675 = inst_30640;
var inst_30640__$1 = tmp30675;
var state_30663__$1 = (function (){var statearr_30679 = state_30663;
(statearr_30679[(7)] = inst_30640__$1);

return statearr_30679;
})();
var statearr_30680_30702 = state_30663__$1;
(statearr_30680_30702[(2)] = null);

(statearr_30680_30702[(1)] = (2));


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
});})(c__28093__auto___30692,out))
;
return ((function (switch__27981__auto__,c__28093__auto___30692,out){
return (function() {
var cljs$core$async$state_machine__27982__auto__ = null;
var cljs$core$async$state_machine__27982__auto____0 = (function (){
var statearr_30684 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30684[(0)] = cljs$core$async$state_machine__27982__auto__);

(statearr_30684[(1)] = (1));

return statearr_30684;
});
var cljs$core$async$state_machine__27982__auto____1 = (function (state_30663){
while(true){
var ret_value__27983__auto__ = (function (){try{while(true){
var result__27984__auto__ = switch__27981__auto__.call(null,state_30663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27984__auto__;
}
break;
}
}catch (e30685){if((e30685 instanceof Object)){
var ex__27985__auto__ = e30685;
var statearr_30686_30703 = state_30663;
(statearr_30686_30703[(5)] = ex__27985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30685;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30704 = state_30663;
state_30663 = G__30704;
continue;
} else {
return ret_value__27983__auto__;
}
break;
}
});
cljs$core$async$state_machine__27982__auto__ = function(state_30663){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27982__auto____1.call(this,state_30663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27982__auto____0;
cljs$core$async$state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27982__auto____1;
return cljs$core$async$state_machine__27982__auto__;
})()
;})(switch__27981__auto__,c__28093__auto___30692,out))
})();
var state__28095__auto__ = (function (){var statearr_30687 = f__28094__auto__.call(null);
(statearr_30687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28093__auto___30692);

return statearr_30687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28095__auto__);
});})(c__28093__auto___30692,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30705 = [];
var len__26996__auto___30775 = arguments.length;
var i__26997__auto___30776 = (0);
while(true){
if((i__26997__auto___30776 < len__26996__auto___30775)){
args30705.push((arguments[i__26997__auto___30776]));

var G__30777 = (i__26997__auto___30776 + (1));
i__26997__auto___30776 = G__30777;
continue;
} else {
}
break;
}

var G__30707 = args30705.length;
switch (G__30707) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30705.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28093__auto___30779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28093__auto___30779,out){
return (function (){
var f__28094__auto__ = (function (){var switch__27981__auto__ = ((function (c__28093__auto___30779,out){
return (function (state_30745){
var state_val_30746 = (state_30745[(1)]);
if((state_val_30746 === (7))){
var inst_30741 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
var statearr_30747_30780 = state_30745__$1;
(statearr_30747_30780[(2)] = inst_30741);

(statearr_30747_30780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (1))){
var inst_30708 = (new Array(n));
var inst_30709 = inst_30708;
var inst_30710 = (0);
var state_30745__$1 = (function (){var statearr_30748 = state_30745;
(statearr_30748[(7)] = inst_30709);

(statearr_30748[(8)] = inst_30710);

return statearr_30748;
})();
var statearr_30749_30781 = state_30745__$1;
(statearr_30749_30781[(2)] = null);

(statearr_30749_30781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (4))){
var inst_30713 = (state_30745[(9)]);
var inst_30713__$1 = (state_30745[(2)]);
var inst_30714 = (inst_30713__$1 == null);
var inst_30715 = cljs.core.not.call(null,inst_30714);
var state_30745__$1 = (function (){var statearr_30750 = state_30745;
(statearr_30750[(9)] = inst_30713__$1);

return statearr_30750;
})();
if(inst_30715){
var statearr_30751_30782 = state_30745__$1;
(statearr_30751_30782[(1)] = (5));

} else {
var statearr_30752_30783 = state_30745__$1;
(statearr_30752_30783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (15))){
var inst_30735 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
var statearr_30753_30784 = state_30745__$1;
(statearr_30753_30784[(2)] = inst_30735);

(statearr_30753_30784[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (13))){
var state_30745__$1 = state_30745;
var statearr_30754_30785 = state_30745__$1;
(statearr_30754_30785[(2)] = null);

(statearr_30754_30785[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (6))){
var inst_30710 = (state_30745[(8)]);
var inst_30731 = (inst_30710 > (0));
var state_30745__$1 = state_30745;
if(cljs.core.truth_(inst_30731)){
var statearr_30755_30786 = state_30745__$1;
(statearr_30755_30786[(1)] = (12));

} else {
var statearr_30756_30787 = state_30745__$1;
(statearr_30756_30787[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (3))){
var inst_30743 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30745__$1,inst_30743);
} else {
if((state_val_30746 === (12))){
var inst_30709 = (state_30745[(7)]);
var inst_30733 = cljs.core.vec.call(null,inst_30709);
var state_30745__$1 = state_30745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30745__$1,(15),out,inst_30733);
} else {
if((state_val_30746 === (2))){
var state_30745__$1 = state_30745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30745__$1,(4),ch);
} else {
if((state_val_30746 === (11))){
var inst_30725 = (state_30745[(2)]);
var inst_30726 = (new Array(n));
var inst_30709 = inst_30726;
var inst_30710 = (0);
var state_30745__$1 = (function (){var statearr_30757 = state_30745;
(statearr_30757[(7)] = inst_30709);

(statearr_30757[(10)] = inst_30725);

(statearr_30757[(8)] = inst_30710);

return statearr_30757;
})();
var statearr_30758_30788 = state_30745__$1;
(statearr_30758_30788[(2)] = null);

(statearr_30758_30788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (9))){
var inst_30709 = (state_30745[(7)]);
var inst_30723 = cljs.core.vec.call(null,inst_30709);
var state_30745__$1 = state_30745;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30745__$1,(11),out,inst_30723);
} else {
if((state_val_30746 === (5))){
var inst_30718 = (state_30745[(11)]);
var inst_30709 = (state_30745[(7)]);
var inst_30710 = (state_30745[(8)]);
var inst_30713 = (state_30745[(9)]);
var inst_30717 = (inst_30709[inst_30710] = inst_30713);
var inst_30718__$1 = (inst_30710 + (1));
var inst_30719 = (inst_30718__$1 < n);
var state_30745__$1 = (function (){var statearr_30759 = state_30745;
(statearr_30759[(11)] = inst_30718__$1);

(statearr_30759[(12)] = inst_30717);

return statearr_30759;
})();
if(cljs.core.truth_(inst_30719)){
var statearr_30760_30789 = state_30745__$1;
(statearr_30760_30789[(1)] = (8));

} else {
var statearr_30761_30790 = state_30745__$1;
(statearr_30761_30790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (14))){
var inst_30738 = (state_30745[(2)]);
var inst_30739 = cljs.core.async.close_BANG_.call(null,out);
var state_30745__$1 = (function (){var statearr_30763 = state_30745;
(statearr_30763[(13)] = inst_30738);

return statearr_30763;
})();
var statearr_30764_30791 = state_30745__$1;
(statearr_30764_30791[(2)] = inst_30739);

(statearr_30764_30791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (10))){
var inst_30729 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
var statearr_30765_30792 = state_30745__$1;
(statearr_30765_30792[(2)] = inst_30729);

(statearr_30765_30792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (8))){
var inst_30718 = (state_30745[(11)]);
var inst_30709 = (state_30745[(7)]);
var tmp30762 = inst_30709;
var inst_30709__$1 = tmp30762;
var inst_30710 = inst_30718;
var state_30745__$1 = (function (){var statearr_30766 = state_30745;
(statearr_30766[(7)] = inst_30709__$1);

(statearr_30766[(8)] = inst_30710);

return statearr_30766;
})();
var statearr_30767_30793 = state_30745__$1;
(statearr_30767_30793[(2)] = null);

(statearr_30767_30793[(1)] = (2));


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
});})(c__28093__auto___30779,out))
;
return ((function (switch__27981__auto__,c__28093__auto___30779,out){
return (function() {
var cljs$core$async$state_machine__27982__auto__ = null;
var cljs$core$async$state_machine__27982__auto____0 = (function (){
var statearr_30771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30771[(0)] = cljs$core$async$state_machine__27982__auto__);

(statearr_30771[(1)] = (1));

return statearr_30771;
});
var cljs$core$async$state_machine__27982__auto____1 = (function (state_30745){
while(true){
var ret_value__27983__auto__ = (function (){try{while(true){
var result__27984__auto__ = switch__27981__auto__.call(null,state_30745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27984__auto__;
}
break;
}
}catch (e30772){if((e30772 instanceof Object)){
var ex__27985__auto__ = e30772;
var statearr_30773_30794 = state_30745;
(statearr_30773_30794[(5)] = ex__27985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30795 = state_30745;
state_30745 = G__30795;
continue;
} else {
return ret_value__27983__auto__;
}
break;
}
});
cljs$core$async$state_machine__27982__auto__ = function(state_30745){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27982__auto____1.call(this,state_30745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27982__auto____0;
cljs$core$async$state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27982__auto____1;
return cljs$core$async$state_machine__27982__auto__;
})()
;})(switch__27981__auto__,c__28093__auto___30779,out))
})();
var state__28095__auto__ = (function (){var statearr_30774 = f__28094__auto__.call(null);
(statearr_30774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28093__auto___30779);

return statearr_30774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28095__auto__);
});})(c__28093__auto___30779,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30796 = [];
var len__26996__auto___30870 = arguments.length;
var i__26997__auto___30871 = (0);
while(true){
if((i__26997__auto___30871 < len__26996__auto___30870)){
args30796.push((arguments[i__26997__auto___30871]));

var G__30872 = (i__26997__auto___30871 + (1));
i__26997__auto___30871 = G__30872;
continue;
} else {
}
break;
}

var G__30798 = args30796.length;
switch (G__30798) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30796.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28093__auto___30874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28093__auto___30874,out){
return (function (){
var f__28094__auto__ = (function (){var switch__27981__auto__ = ((function (c__28093__auto___30874,out){
return (function (state_30840){
var state_val_30841 = (state_30840[(1)]);
if((state_val_30841 === (7))){
var inst_30836 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
var statearr_30842_30875 = state_30840__$1;
(statearr_30842_30875[(2)] = inst_30836);

(statearr_30842_30875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (1))){
var inst_30799 = [];
var inst_30800 = inst_30799;
var inst_30801 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30840__$1 = (function (){var statearr_30843 = state_30840;
(statearr_30843[(7)] = inst_30800);

(statearr_30843[(8)] = inst_30801);

return statearr_30843;
})();
var statearr_30844_30876 = state_30840__$1;
(statearr_30844_30876[(2)] = null);

(statearr_30844_30876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (4))){
var inst_30804 = (state_30840[(9)]);
var inst_30804__$1 = (state_30840[(2)]);
var inst_30805 = (inst_30804__$1 == null);
var inst_30806 = cljs.core.not.call(null,inst_30805);
var state_30840__$1 = (function (){var statearr_30845 = state_30840;
(statearr_30845[(9)] = inst_30804__$1);

return statearr_30845;
})();
if(inst_30806){
var statearr_30846_30877 = state_30840__$1;
(statearr_30846_30877[(1)] = (5));

} else {
var statearr_30847_30878 = state_30840__$1;
(statearr_30847_30878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (15))){
var inst_30830 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
var statearr_30848_30879 = state_30840__$1;
(statearr_30848_30879[(2)] = inst_30830);

(statearr_30848_30879[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (13))){
var state_30840__$1 = state_30840;
var statearr_30849_30880 = state_30840__$1;
(statearr_30849_30880[(2)] = null);

(statearr_30849_30880[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (6))){
var inst_30800 = (state_30840[(7)]);
var inst_30825 = inst_30800.length;
var inst_30826 = (inst_30825 > (0));
var state_30840__$1 = state_30840;
if(cljs.core.truth_(inst_30826)){
var statearr_30850_30881 = state_30840__$1;
(statearr_30850_30881[(1)] = (12));

} else {
var statearr_30851_30882 = state_30840__$1;
(statearr_30851_30882[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (3))){
var inst_30838 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30840__$1,inst_30838);
} else {
if((state_val_30841 === (12))){
var inst_30800 = (state_30840[(7)]);
var inst_30828 = cljs.core.vec.call(null,inst_30800);
var state_30840__$1 = state_30840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30840__$1,(15),out,inst_30828);
} else {
if((state_val_30841 === (2))){
var state_30840__$1 = state_30840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30840__$1,(4),ch);
} else {
if((state_val_30841 === (11))){
var inst_30808 = (state_30840[(10)]);
var inst_30804 = (state_30840[(9)]);
var inst_30818 = (state_30840[(2)]);
var inst_30819 = [];
var inst_30820 = inst_30819.push(inst_30804);
var inst_30800 = inst_30819;
var inst_30801 = inst_30808;
var state_30840__$1 = (function (){var statearr_30852 = state_30840;
(statearr_30852[(7)] = inst_30800);

(statearr_30852[(11)] = inst_30820);

(statearr_30852[(8)] = inst_30801);

(statearr_30852[(12)] = inst_30818);

return statearr_30852;
})();
var statearr_30853_30883 = state_30840__$1;
(statearr_30853_30883[(2)] = null);

(statearr_30853_30883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (9))){
var inst_30800 = (state_30840[(7)]);
var inst_30816 = cljs.core.vec.call(null,inst_30800);
var state_30840__$1 = state_30840;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30840__$1,(11),out,inst_30816);
} else {
if((state_val_30841 === (5))){
var inst_30808 = (state_30840[(10)]);
var inst_30804 = (state_30840[(9)]);
var inst_30801 = (state_30840[(8)]);
var inst_30808__$1 = f.call(null,inst_30804);
var inst_30809 = cljs.core._EQ_.call(null,inst_30808__$1,inst_30801);
var inst_30810 = cljs.core.keyword_identical_QMARK_.call(null,inst_30801,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30811 = (inst_30809) || (inst_30810);
var state_30840__$1 = (function (){var statearr_30854 = state_30840;
(statearr_30854[(10)] = inst_30808__$1);

return statearr_30854;
})();
if(cljs.core.truth_(inst_30811)){
var statearr_30855_30884 = state_30840__$1;
(statearr_30855_30884[(1)] = (8));

} else {
var statearr_30856_30885 = state_30840__$1;
(statearr_30856_30885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (14))){
var inst_30833 = (state_30840[(2)]);
var inst_30834 = cljs.core.async.close_BANG_.call(null,out);
var state_30840__$1 = (function (){var statearr_30858 = state_30840;
(statearr_30858[(13)] = inst_30833);

return statearr_30858;
})();
var statearr_30859_30886 = state_30840__$1;
(statearr_30859_30886[(2)] = inst_30834);

(statearr_30859_30886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (10))){
var inst_30823 = (state_30840[(2)]);
var state_30840__$1 = state_30840;
var statearr_30860_30887 = state_30840__$1;
(statearr_30860_30887[(2)] = inst_30823);

(statearr_30860_30887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30841 === (8))){
var inst_30808 = (state_30840[(10)]);
var inst_30800 = (state_30840[(7)]);
var inst_30804 = (state_30840[(9)]);
var inst_30813 = inst_30800.push(inst_30804);
var tmp30857 = inst_30800;
var inst_30800__$1 = tmp30857;
var inst_30801 = inst_30808;
var state_30840__$1 = (function (){var statearr_30861 = state_30840;
(statearr_30861[(7)] = inst_30800__$1);

(statearr_30861[(14)] = inst_30813);

(statearr_30861[(8)] = inst_30801);

return statearr_30861;
})();
var statearr_30862_30888 = state_30840__$1;
(statearr_30862_30888[(2)] = null);

(statearr_30862_30888[(1)] = (2));


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
});})(c__28093__auto___30874,out))
;
return ((function (switch__27981__auto__,c__28093__auto___30874,out){
return (function() {
var cljs$core$async$state_machine__27982__auto__ = null;
var cljs$core$async$state_machine__27982__auto____0 = (function (){
var statearr_30866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30866[(0)] = cljs$core$async$state_machine__27982__auto__);

(statearr_30866[(1)] = (1));

return statearr_30866;
});
var cljs$core$async$state_machine__27982__auto____1 = (function (state_30840){
while(true){
var ret_value__27983__auto__ = (function (){try{while(true){
var result__27984__auto__ = switch__27981__auto__.call(null,state_30840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27984__auto__;
}
break;
}
}catch (e30867){if((e30867 instanceof Object)){
var ex__27985__auto__ = e30867;
var statearr_30868_30889 = state_30840;
(statearr_30868_30889[(5)] = ex__27985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30890 = state_30840;
state_30840 = G__30890;
continue;
} else {
return ret_value__27983__auto__;
}
break;
}
});
cljs$core$async$state_machine__27982__auto__ = function(state_30840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27982__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27982__auto____1.call(this,state_30840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27982__auto____0;
cljs$core$async$state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27982__auto____1;
return cljs$core$async$state_machine__27982__auto__;
})()
;})(switch__27981__auto__,c__28093__auto___30874,out))
})();
var state__28095__auto__ = (function (){var statearr_30869 = f__28094__auto__.call(null);
(statearr_30869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28093__auto___30874);

return statearr_30869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28095__auto__);
});})(c__28093__auto___30874,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1480863928506