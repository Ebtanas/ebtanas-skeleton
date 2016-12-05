// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25888__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25888__auto__){
return or__25888__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__25888__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25888__auto__)){
return or__25888__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31074_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31074_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__31079 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31080 = null;
var count__31081 = (0);
var i__31082 = (0);
while(true){
if((i__31082 < count__31081)){
var n = cljs.core._nth.call(null,chunk__31080,i__31082);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31083 = seq__31079;
var G__31084 = chunk__31080;
var G__31085 = count__31081;
var G__31086 = (i__31082 + (1));
seq__31079 = G__31083;
chunk__31080 = G__31084;
count__31081 = G__31085;
i__31082 = G__31086;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31079);
if(temp__4657__auto__){
var seq__31079__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31079__$1)){
var c__26702__auto__ = cljs.core.chunk_first.call(null,seq__31079__$1);
var G__31087 = cljs.core.chunk_rest.call(null,seq__31079__$1);
var G__31088 = c__26702__auto__;
var G__31089 = cljs.core.count.call(null,c__26702__auto__);
var G__31090 = (0);
seq__31079 = G__31087;
chunk__31080 = G__31088;
count__31081 = G__31089;
i__31082 = G__31090;
continue;
} else {
var n = cljs.core.first.call(null,seq__31079__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31091 = cljs.core.next.call(null,seq__31079__$1);
var G__31092 = null;
var G__31093 = (0);
var G__31094 = (0);
seq__31079 = G__31091;
chunk__31080 = G__31092;
count__31081 = G__31093;
i__31082 = G__31094;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__31145_31156 = cljs.core.seq.call(null,deps);
var chunk__31146_31157 = null;
var count__31147_31158 = (0);
var i__31148_31159 = (0);
while(true){
if((i__31148_31159 < count__31147_31158)){
var dep_31160 = cljs.core._nth.call(null,chunk__31146_31157,i__31148_31159);
topo_sort_helper_STAR_.call(null,dep_31160,(depth + (1)),state);

var G__31161 = seq__31145_31156;
var G__31162 = chunk__31146_31157;
var G__31163 = count__31147_31158;
var G__31164 = (i__31148_31159 + (1));
seq__31145_31156 = G__31161;
chunk__31146_31157 = G__31162;
count__31147_31158 = G__31163;
i__31148_31159 = G__31164;
continue;
} else {
var temp__4657__auto___31165 = cljs.core.seq.call(null,seq__31145_31156);
if(temp__4657__auto___31165){
var seq__31145_31166__$1 = temp__4657__auto___31165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31145_31166__$1)){
var c__26702__auto___31167 = cljs.core.chunk_first.call(null,seq__31145_31166__$1);
var G__31168 = cljs.core.chunk_rest.call(null,seq__31145_31166__$1);
var G__31169 = c__26702__auto___31167;
var G__31170 = cljs.core.count.call(null,c__26702__auto___31167);
var G__31171 = (0);
seq__31145_31156 = G__31168;
chunk__31146_31157 = G__31169;
count__31147_31158 = G__31170;
i__31148_31159 = G__31171;
continue;
} else {
var dep_31172 = cljs.core.first.call(null,seq__31145_31166__$1);
topo_sort_helper_STAR_.call(null,dep_31172,(depth + (1)),state);

var G__31173 = cljs.core.next.call(null,seq__31145_31166__$1);
var G__31174 = null;
var G__31175 = (0);
var G__31176 = (0);
seq__31145_31156 = G__31173;
chunk__31146_31157 = G__31174;
count__31147_31158 = G__31175;
i__31148_31159 = G__31176;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31149){
var vec__31153 = p__31149;
var seq__31154 = cljs.core.seq.call(null,vec__31153);
var first__31155 = cljs.core.first.call(null,seq__31154);
var seq__31154__$1 = cljs.core.next.call(null,seq__31154);
var x = first__31155;
var xs = seq__31154__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31153,seq__31154,first__31155,seq__31154__$1,x,xs,get_deps__$1){
return (function (p1__31095_SHARP_){
return clojure.set.difference.call(null,p1__31095_SHARP_,x);
});})(vec__31153,seq__31154,first__31155,seq__31154__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__31189 = cljs.core.seq.call(null,provides);
var chunk__31190 = null;
var count__31191 = (0);
var i__31192 = (0);
while(true){
if((i__31192 < count__31191)){
var prov = cljs.core._nth.call(null,chunk__31190,i__31192);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31193_31201 = cljs.core.seq.call(null,requires);
var chunk__31194_31202 = null;
var count__31195_31203 = (0);
var i__31196_31204 = (0);
while(true){
if((i__31196_31204 < count__31195_31203)){
var req_31205 = cljs.core._nth.call(null,chunk__31194_31202,i__31196_31204);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31205,prov);

var G__31206 = seq__31193_31201;
var G__31207 = chunk__31194_31202;
var G__31208 = count__31195_31203;
var G__31209 = (i__31196_31204 + (1));
seq__31193_31201 = G__31206;
chunk__31194_31202 = G__31207;
count__31195_31203 = G__31208;
i__31196_31204 = G__31209;
continue;
} else {
var temp__4657__auto___31210 = cljs.core.seq.call(null,seq__31193_31201);
if(temp__4657__auto___31210){
var seq__31193_31211__$1 = temp__4657__auto___31210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31193_31211__$1)){
var c__26702__auto___31212 = cljs.core.chunk_first.call(null,seq__31193_31211__$1);
var G__31213 = cljs.core.chunk_rest.call(null,seq__31193_31211__$1);
var G__31214 = c__26702__auto___31212;
var G__31215 = cljs.core.count.call(null,c__26702__auto___31212);
var G__31216 = (0);
seq__31193_31201 = G__31213;
chunk__31194_31202 = G__31214;
count__31195_31203 = G__31215;
i__31196_31204 = G__31216;
continue;
} else {
var req_31217 = cljs.core.first.call(null,seq__31193_31211__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31217,prov);

var G__31218 = cljs.core.next.call(null,seq__31193_31211__$1);
var G__31219 = null;
var G__31220 = (0);
var G__31221 = (0);
seq__31193_31201 = G__31218;
chunk__31194_31202 = G__31219;
count__31195_31203 = G__31220;
i__31196_31204 = G__31221;
continue;
}
} else {
}
}
break;
}

var G__31222 = seq__31189;
var G__31223 = chunk__31190;
var G__31224 = count__31191;
var G__31225 = (i__31192 + (1));
seq__31189 = G__31222;
chunk__31190 = G__31223;
count__31191 = G__31224;
i__31192 = G__31225;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31189);
if(temp__4657__auto__){
var seq__31189__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31189__$1)){
var c__26702__auto__ = cljs.core.chunk_first.call(null,seq__31189__$1);
var G__31226 = cljs.core.chunk_rest.call(null,seq__31189__$1);
var G__31227 = c__26702__auto__;
var G__31228 = cljs.core.count.call(null,c__26702__auto__);
var G__31229 = (0);
seq__31189 = G__31226;
chunk__31190 = G__31227;
count__31191 = G__31228;
i__31192 = G__31229;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31189__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31197_31230 = cljs.core.seq.call(null,requires);
var chunk__31198_31231 = null;
var count__31199_31232 = (0);
var i__31200_31233 = (0);
while(true){
if((i__31200_31233 < count__31199_31232)){
var req_31234 = cljs.core._nth.call(null,chunk__31198_31231,i__31200_31233);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31234,prov);

var G__31235 = seq__31197_31230;
var G__31236 = chunk__31198_31231;
var G__31237 = count__31199_31232;
var G__31238 = (i__31200_31233 + (1));
seq__31197_31230 = G__31235;
chunk__31198_31231 = G__31236;
count__31199_31232 = G__31237;
i__31200_31233 = G__31238;
continue;
} else {
var temp__4657__auto___31239__$1 = cljs.core.seq.call(null,seq__31197_31230);
if(temp__4657__auto___31239__$1){
var seq__31197_31240__$1 = temp__4657__auto___31239__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31197_31240__$1)){
var c__26702__auto___31241 = cljs.core.chunk_first.call(null,seq__31197_31240__$1);
var G__31242 = cljs.core.chunk_rest.call(null,seq__31197_31240__$1);
var G__31243 = c__26702__auto___31241;
var G__31244 = cljs.core.count.call(null,c__26702__auto___31241);
var G__31245 = (0);
seq__31197_31230 = G__31242;
chunk__31198_31231 = G__31243;
count__31199_31232 = G__31244;
i__31200_31233 = G__31245;
continue;
} else {
var req_31246 = cljs.core.first.call(null,seq__31197_31240__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31246,prov);

var G__31247 = cljs.core.next.call(null,seq__31197_31240__$1);
var G__31248 = null;
var G__31249 = (0);
var G__31250 = (0);
seq__31197_31230 = G__31247;
chunk__31198_31231 = G__31248;
count__31199_31232 = G__31249;
i__31200_31233 = G__31250;
continue;
}
} else {
}
}
break;
}

var G__31251 = cljs.core.next.call(null,seq__31189__$1);
var G__31252 = null;
var G__31253 = (0);
var G__31254 = (0);
seq__31189 = G__31251;
chunk__31190 = G__31252;
count__31191 = G__31253;
i__31192 = G__31254;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__31259_31263 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31260_31264 = null;
var count__31261_31265 = (0);
var i__31262_31266 = (0);
while(true){
if((i__31262_31266 < count__31261_31265)){
var ns_31267 = cljs.core._nth.call(null,chunk__31260_31264,i__31262_31266);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31267);

var G__31268 = seq__31259_31263;
var G__31269 = chunk__31260_31264;
var G__31270 = count__31261_31265;
var G__31271 = (i__31262_31266 + (1));
seq__31259_31263 = G__31268;
chunk__31260_31264 = G__31269;
count__31261_31265 = G__31270;
i__31262_31266 = G__31271;
continue;
} else {
var temp__4657__auto___31272 = cljs.core.seq.call(null,seq__31259_31263);
if(temp__4657__auto___31272){
var seq__31259_31273__$1 = temp__4657__auto___31272;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31259_31273__$1)){
var c__26702__auto___31274 = cljs.core.chunk_first.call(null,seq__31259_31273__$1);
var G__31275 = cljs.core.chunk_rest.call(null,seq__31259_31273__$1);
var G__31276 = c__26702__auto___31274;
var G__31277 = cljs.core.count.call(null,c__26702__auto___31274);
var G__31278 = (0);
seq__31259_31263 = G__31275;
chunk__31260_31264 = G__31276;
count__31261_31265 = G__31277;
i__31262_31266 = G__31278;
continue;
} else {
var ns_31279 = cljs.core.first.call(null,seq__31259_31273__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31279);

var G__31280 = cljs.core.next.call(null,seq__31259_31273__$1);
var G__31281 = null;
var G__31282 = (0);
var G__31283 = (0);
seq__31259_31263 = G__31280;
chunk__31260_31264 = G__31281;
count__31261_31265 = G__31282;
i__31262_31266 = G__31283;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__25888__auto__ = goog.require__;
if(cljs.core.truth_(or__25888__auto__)){
return or__25888__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__31284__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31284 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31285__i = 0, G__31285__a = new Array(arguments.length -  0);
while (G__31285__i < G__31285__a.length) {G__31285__a[G__31285__i] = arguments[G__31285__i + 0]; ++G__31285__i;}
  args = new cljs.core.IndexedSeq(G__31285__a,0);
} 
return G__31284__delegate.call(this,args);};
G__31284.cljs$lang$maxFixedArity = 0;
G__31284.cljs$lang$applyTo = (function (arglist__31286){
var args = cljs.core.seq(arglist__31286);
return G__31284__delegate(args);
});
G__31284.cljs$core$IFn$_invoke$arity$variadic = G__31284__delegate;
return G__31284;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31288 = cljs.core._EQ_;
var expr__31289 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31288.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31289))){
var path_parts = ((function (pred__31288,expr__31289){
return (function (p1__31287_SHARP_){
return clojure.string.split.call(null,p1__31287_SHARP_,/[\/\\]/);
});})(pred__31288,expr__31289))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__31288,expr__31289){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e31291){if((e31291 instanceof Error)){
var e = e31291;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31291;

}
}})());
});
;})(path_parts,sep,root,pred__31288,expr__31289))
} else {
if(cljs.core.truth_(pred__31288.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31289))){
return ((function (pred__31288,expr__31289){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__31288,expr__31289){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__31288,expr__31289))
);

return deferred.addErrback(((function (deferred,pred__31288,expr__31289){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__31288,expr__31289))
);
});
;})(pred__31288,expr__31289))
} else {
return ((function (pred__31288,expr__31289){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__31288,expr__31289))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31292,callback){
var map__31295 = p__31292;
var map__31295__$1 = ((((!((map__31295 == null)))?((((map__31295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31295.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31295):map__31295);
var file_msg = map__31295__$1;
var request_url = cljs.core.get.call(null,map__31295__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__31295,map__31295__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31295,map__31295__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28093__auto__){
return (function (){
var f__28094__auto__ = (function (){var switch__27981__auto__ = ((function (c__28093__auto__){
return (function (state_31319){
var state_val_31320 = (state_31319[(1)]);
if((state_val_31320 === (7))){
var inst_31315 = (state_31319[(2)]);
var state_31319__$1 = state_31319;
var statearr_31321_31341 = state_31319__$1;
(statearr_31321_31341[(2)] = inst_31315);

(statearr_31321_31341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31320 === (1))){
var state_31319__$1 = state_31319;
var statearr_31322_31342 = state_31319__$1;
(statearr_31322_31342[(2)] = null);

(statearr_31322_31342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31320 === (4))){
var inst_31299 = (state_31319[(7)]);
var inst_31299__$1 = (state_31319[(2)]);
var state_31319__$1 = (function (){var statearr_31323 = state_31319;
(statearr_31323[(7)] = inst_31299__$1);

return statearr_31323;
})();
if(cljs.core.truth_(inst_31299__$1)){
var statearr_31324_31343 = state_31319__$1;
(statearr_31324_31343[(1)] = (5));

} else {
var statearr_31325_31344 = state_31319__$1;
(statearr_31325_31344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31320 === (6))){
var state_31319__$1 = state_31319;
var statearr_31326_31345 = state_31319__$1;
(statearr_31326_31345[(2)] = null);

(statearr_31326_31345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31320 === (3))){
var inst_31317 = (state_31319[(2)]);
var state_31319__$1 = state_31319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31319__$1,inst_31317);
} else {
if((state_val_31320 === (2))){
var state_31319__$1 = state_31319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31319__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31320 === (11))){
var inst_31311 = (state_31319[(2)]);
var state_31319__$1 = (function (){var statearr_31327 = state_31319;
(statearr_31327[(8)] = inst_31311);

return statearr_31327;
})();
var statearr_31328_31346 = state_31319__$1;
(statearr_31328_31346[(2)] = null);

(statearr_31328_31346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31320 === (9))){
var inst_31303 = (state_31319[(9)]);
var inst_31305 = (state_31319[(10)]);
var inst_31307 = inst_31305.call(null,inst_31303);
var state_31319__$1 = state_31319;
var statearr_31329_31347 = state_31319__$1;
(statearr_31329_31347[(2)] = inst_31307);

(statearr_31329_31347[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31320 === (5))){
var inst_31299 = (state_31319[(7)]);
var inst_31301 = figwheel.client.file_reloading.blocking_load.call(null,inst_31299);
var state_31319__$1 = state_31319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31319__$1,(8),inst_31301);
} else {
if((state_val_31320 === (10))){
var inst_31303 = (state_31319[(9)]);
var inst_31309 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31303);
var state_31319__$1 = state_31319;
var statearr_31330_31348 = state_31319__$1;
(statearr_31330_31348[(2)] = inst_31309);

(statearr_31330_31348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31320 === (8))){
var inst_31299 = (state_31319[(7)]);
var inst_31305 = (state_31319[(10)]);
var inst_31303 = (state_31319[(2)]);
var inst_31304 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31305__$1 = cljs.core.get.call(null,inst_31304,inst_31299);
var state_31319__$1 = (function (){var statearr_31331 = state_31319;
(statearr_31331[(9)] = inst_31303);

(statearr_31331[(10)] = inst_31305__$1);

return statearr_31331;
})();
if(cljs.core.truth_(inst_31305__$1)){
var statearr_31332_31349 = state_31319__$1;
(statearr_31332_31349[(1)] = (9));

} else {
var statearr_31333_31350 = state_31319__$1;
(statearr_31333_31350[(1)] = (10));

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
});})(c__28093__auto__))
;
return ((function (switch__27981__auto__,c__28093__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27982__auto__ = null;
var figwheel$client$file_reloading$state_machine__27982__auto____0 = (function (){
var statearr_31337 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31337[(0)] = figwheel$client$file_reloading$state_machine__27982__auto__);

(statearr_31337[(1)] = (1));

return statearr_31337;
});
var figwheel$client$file_reloading$state_machine__27982__auto____1 = (function (state_31319){
while(true){
var ret_value__27983__auto__ = (function (){try{while(true){
var result__27984__auto__ = switch__27981__auto__.call(null,state_31319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27984__auto__;
}
break;
}
}catch (e31338){if((e31338 instanceof Object)){
var ex__27985__auto__ = e31338;
var statearr_31339_31351 = state_31319;
(statearr_31339_31351[(5)] = ex__27985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31352 = state_31319;
state_31319 = G__31352;
continue;
} else {
return ret_value__27983__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27982__auto__ = function(state_31319){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27982__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27982__auto____1.call(this,state_31319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27982__auto____0;
figwheel$client$file_reloading$state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27982__auto____1;
return figwheel$client$file_reloading$state_machine__27982__auto__;
})()
;})(switch__27981__auto__,c__28093__auto__))
})();
var state__28095__auto__ = (function (){var statearr_31340 = f__28094__auto__.call(null);
(statearr_31340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28093__auto__);

return statearr_31340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28095__auto__);
});})(c__28093__auto__))
);

return c__28093__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31353,callback){
var map__31356 = p__31353;
var map__31356__$1 = ((((!((map__31356 == null)))?((((map__31356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31356.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31356):map__31356);
var file_msg = map__31356__$1;
var namespace = cljs.core.get.call(null,map__31356__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__31356,map__31356__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__31356,map__31356__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31358){
var map__31361 = p__31358;
var map__31361__$1 = ((((!((map__31361 == null)))?((((map__31361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31361):map__31361);
var file_msg = map__31361__$1;
var namespace = cljs.core.get.call(null,map__31361__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25876__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__25876__auto__){
var or__25888__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25888__auto__)){
return or__25888__auto__;
} else {
var or__25888__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25888__auto____$1)){
return or__25888__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25876__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31363,callback){
var map__31366 = p__31363;
var map__31366__$1 = ((((!((map__31366 == null)))?((((map__31366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31366.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31366):map__31366);
var file_msg = map__31366__$1;
var request_url = cljs.core.get.call(null,map__31366__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31366__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28093__auto___31470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28093__auto___31470,out){
return (function (){
var f__28094__auto__ = (function (){var switch__27981__auto__ = ((function (c__28093__auto___31470,out){
return (function (state_31452){
var state_val_31453 = (state_31452[(1)]);
if((state_val_31453 === (1))){
var inst_31426 = cljs.core.seq.call(null,files);
var inst_31427 = cljs.core.first.call(null,inst_31426);
var inst_31428 = cljs.core.next.call(null,inst_31426);
var inst_31429 = files;
var state_31452__$1 = (function (){var statearr_31454 = state_31452;
(statearr_31454[(7)] = inst_31429);

(statearr_31454[(8)] = inst_31428);

(statearr_31454[(9)] = inst_31427);

return statearr_31454;
})();
var statearr_31455_31471 = state_31452__$1;
(statearr_31455_31471[(2)] = null);

(statearr_31455_31471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (2))){
var inst_31435 = (state_31452[(10)]);
var inst_31429 = (state_31452[(7)]);
var inst_31434 = cljs.core.seq.call(null,inst_31429);
var inst_31435__$1 = cljs.core.first.call(null,inst_31434);
var inst_31436 = cljs.core.next.call(null,inst_31434);
var inst_31437 = (inst_31435__$1 == null);
var inst_31438 = cljs.core.not.call(null,inst_31437);
var state_31452__$1 = (function (){var statearr_31456 = state_31452;
(statearr_31456[(10)] = inst_31435__$1);

(statearr_31456[(11)] = inst_31436);

return statearr_31456;
})();
if(inst_31438){
var statearr_31457_31472 = state_31452__$1;
(statearr_31457_31472[(1)] = (4));

} else {
var statearr_31458_31473 = state_31452__$1;
(statearr_31458_31473[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (3))){
var inst_31450 = (state_31452[(2)]);
var state_31452__$1 = state_31452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31452__$1,inst_31450);
} else {
if((state_val_31453 === (4))){
var inst_31435 = (state_31452[(10)]);
var inst_31440 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31435);
var state_31452__$1 = state_31452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31452__$1,(7),inst_31440);
} else {
if((state_val_31453 === (5))){
var inst_31446 = cljs.core.async.close_BANG_.call(null,out);
var state_31452__$1 = state_31452;
var statearr_31459_31474 = state_31452__$1;
(statearr_31459_31474[(2)] = inst_31446);

(statearr_31459_31474[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (6))){
var inst_31448 = (state_31452[(2)]);
var state_31452__$1 = state_31452;
var statearr_31460_31475 = state_31452__$1;
(statearr_31460_31475[(2)] = inst_31448);

(statearr_31460_31475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31453 === (7))){
var inst_31436 = (state_31452[(11)]);
var inst_31442 = (state_31452[(2)]);
var inst_31443 = cljs.core.async.put_BANG_.call(null,out,inst_31442);
var inst_31429 = inst_31436;
var state_31452__$1 = (function (){var statearr_31461 = state_31452;
(statearr_31461[(7)] = inst_31429);

(statearr_31461[(12)] = inst_31443);

return statearr_31461;
})();
var statearr_31462_31476 = state_31452__$1;
(statearr_31462_31476[(2)] = null);

(statearr_31462_31476[(1)] = (2));


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
});})(c__28093__auto___31470,out))
;
return ((function (switch__27981__auto__,c__28093__auto___31470,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27982__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27982__auto____0 = (function (){
var statearr_31466 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31466[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27982__auto__);

(statearr_31466[(1)] = (1));

return statearr_31466;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27982__auto____1 = (function (state_31452){
while(true){
var ret_value__27983__auto__ = (function (){try{while(true){
var result__27984__auto__ = switch__27981__auto__.call(null,state_31452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27984__auto__;
}
break;
}
}catch (e31467){if((e31467 instanceof Object)){
var ex__27985__auto__ = e31467;
var statearr_31468_31477 = state_31452;
(statearr_31468_31477[(5)] = ex__27985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31478 = state_31452;
state_31452 = G__31478;
continue;
} else {
return ret_value__27983__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27982__auto__ = function(state_31452){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27982__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27982__auto____1.call(this,state_31452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27982__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27982__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27982__auto__;
})()
;})(switch__27981__auto__,c__28093__auto___31470,out))
})();
var state__28095__auto__ = (function (){var statearr_31469 = f__28094__auto__.call(null);
(statearr_31469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28093__auto___31470);

return statearr_31469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28095__auto__);
});})(c__28093__auto___31470,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31479,opts){
var map__31483 = p__31479;
var map__31483__$1 = ((((!((map__31483 == null)))?((((map__31483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31483):map__31483);
var eval_body = cljs.core.get.call(null,map__31483__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31483__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25876__auto__ = eval_body;
if(cljs.core.truth_(and__25876__auto__)){
return typeof eval_body === 'string';
} else {
return and__25876__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e31485){var e = e31485;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__31486_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31486_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__31495){
var vec__31496 = p__31495;
var k = cljs.core.nth.call(null,vec__31496,(0),null);
var v = cljs.core.nth.call(null,vec__31496,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31499){
var vec__31500 = p__31499;
var k = cljs.core.nth.call(null,vec__31500,(0),null);
var v = cljs.core.nth.call(null,vec__31500,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31506,p__31507){
var map__31755 = p__31506;
var map__31755__$1 = ((((!((map__31755 == null)))?((((map__31755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31755.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31755):map__31755);
var opts = map__31755__$1;
var before_jsload = cljs.core.get.call(null,map__31755__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31755__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31755__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31756 = p__31507;
var map__31756__$1 = ((((!((map__31756 == null)))?((((map__31756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31756.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31756):map__31756);
var msg = map__31756__$1;
var files = cljs.core.get.call(null,map__31756__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31756__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31756__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28093__auto__,map__31755,map__31755__$1,opts,before_jsload,on_jsload,reload_dependents,map__31756,map__31756__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28094__auto__ = (function (){var switch__27981__auto__ = ((function (c__28093__auto__,map__31755,map__31755__$1,opts,before_jsload,on_jsload,reload_dependents,map__31756,map__31756__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31910){
var state_val_31911 = (state_31910[(1)]);
if((state_val_31911 === (7))){
var inst_31770 = (state_31910[(7)]);
var inst_31773 = (state_31910[(8)]);
var inst_31771 = (state_31910[(9)]);
var inst_31772 = (state_31910[(10)]);
var inst_31778 = cljs.core._nth.call(null,inst_31771,inst_31773);
var inst_31779 = figwheel.client.file_reloading.eval_body.call(null,inst_31778,opts);
var inst_31780 = (inst_31773 + (1));
var tmp31912 = inst_31770;
var tmp31913 = inst_31771;
var tmp31914 = inst_31772;
var inst_31770__$1 = tmp31912;
var inst_31771__$1 = tmp31913;
var inst_31772__$1 = tmp31914;
var inst_31773__$1 = inst_31780;
var state_31910__$1 = (function (){var statearr_31915 = state_31910;
(statearr_31915[(7)] = inst_31770__$1);

(statearr_31915[(11)] = inst_31779);

(statearr_31915[(8)] = inst_31773__$1);

(statearr_31915[(9)] = inst_31771__$1);

(statearr_31915[(10)] = inst_31772__$1);

return statearr_31915;
})();
var statearr_31916_32002 = state_31910__$1;
(statearr_31916_32002[(2)] = null);

(statearr_31916_32002[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (20))){
var inst_31813 = (state_31910[(12)]);
var inst_31821 = figwheel.client.file_reloading.sort_files.call(null,inst_31813);
var state_31910__$1 = state_31910;
var statearr_31917_32003 = state_31910__$1;
(statearr_31917_32003[(2)] = inst_31821);

(statearr_31917_32003[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (27))){
var state_31910__$1 = state_31910;
var statearr_31918_32004 = state_31910__$1;
(statearr_31918_32004[(2)] = null);

(statearr_31918_32004[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (1))){
var inst_31762 = (state_31910[(13)]);
var inst_31759 = before_jsload.call(null,files);
var inst_31760 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31761 = (function (){return ((function (inst_31762,inst_31759,inst_31760,state_val_31911,c__28093__auto__,map__31755,map__31755__$1,opts,before_jsload,on_jsload,reload_dependents,map__31756,map__31756__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31503_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31503_SHARP_);
});
;})(inst_31762,inst_31759,inst_31760,state_val_31911,c__28093__auto__,map__31755,map__31755__$1,opts,before_jsload,on_jsload,reload_dependents,map__31756,map__31756__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31762__$1 = cljs.core.filter.call(null,inst_31761,files);
var inst_31763 = cljs.core.not_empty.call(null,inst_31762__$1);
var state_31910__$1 = (function (){var statearr_31919 = state_31910;
(statearr_31919[(14)] = inst_31760);

(statearr_31919[(15)] = inst_31759);

(statearr_31919[(13)] = inst_31762__$1);

return statearr_31919;
})();
if(cljs.core.truth_(inst_31763)){
var statearr_31920_32005 = state_31910__$1;
(statearr_31920_32005[(1)] = (2));

} else {
var statearr_31921_32006 = state_31910__$1;
(statearr_31921_32006[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (24))){
var state_31910__$1 = state_31910;
var statearr_31922_32007 = state_31910__$1;
(statearr_31922_32007[(2)] = null);

(statearr_31922_32007[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (39))){
var inst_31863 = (state_31910[(16)]);
var state_31910__$1 = state_31910;
var statearr_31923_32008 = state_31910__$1;
(statearr_31923_32008[(2)] = inst_31863);

(statearr_31923_32008[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (46))){
var inst_31905 = (state_31910[(2)]);
var state_31910__$1 = state_31910;
var statearr_31924_32009 = state_31910__$1;
(statearr_31924_32009[(2)] = inst_31905);

(statearr_31924_32009[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (4))){
var inst_31807 = (state_31910[(2)]);
var inst_31808 = cljs.core.List.EMPTY;
var inst_31809 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31808);
var inst_31810 = (function (){return ((function (inst_31807,inst_31808,inst_31809,state_val_31911,c__28093__auto__,map__31755,map__31755__$1,opts,before_jsload,on_jsload,reload_dependents,map__31756,map__31756__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31504_SHARP_){
var and__25876__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31504_SHARP_);
if(cljs.core.truth_(and__25876__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31504_SHARP_));
} else {
return and__25876__auto__;
}
});
;})(inst_31807,inst_31808,inst_31809,state_val_31911,c__28093__auto__,map__31755,map__31755__$1,opts,before_jsload,on_jsload,reload_dependents,map__31756,map__31756__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31811 = cljs.core.filter.call(null,inst_31810,files);
var inst_31812 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31813 = cljs.core.concat.call(null,inst_31811,inst_31812);
var state_31910__$1 = (function (){var statearr_31925 = state_31910;
(statearr_31925[(12)] = inst_31813);

(statearr_31925[(17)] = inst_31809);

(statearr_31925[(18)] = inst_31807);

return statearr_31925;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31926_32010 = state_31910__$1;
(statearr_31926_32010[(1)] = (16));

} else {
var statearr_31927_32011 = state_31910__$1;
(statearr_31927_32011[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (15))){
var inst_31797 = (state_31910[(2)]);
var state_31910__$1 = state_31910;
var statearr_31928_32012 = state_31910__$1;
(statearr_31928_32012[(2)] = inst_31797);

(statearr_31928_32012[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (21))){
var inst_31823 = (state_31910[(19)]);
var inst_31823__$1 = (state_31910[(2)]);
var inst_31824 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31823__$1);
var state_31910__$1 = (function (){var statearr_31929 = state_31910;
(statearr_31929[(19)] = inst_31823__$1);

return statearr_31929;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31910__$1,(22),inst_31824);
} else {
if((state_val_31911 === (31))){
var inst_31908 = (state_31910[(2)]);
var state_31910__$1 = state_31910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31910__$1,inst_31908);
} else {
if((state_val_31911 === (32))){
var inst_31863 = (state_31910[(16)]);
var inst_31868 = inst_31863.cljs$lang$protocol_mask$partition0$;
var inst_31869 = (inst_31868 & (64));
var inst_31870 = inst_31863.cljs$core$ISeq$;
var inst_31871 = (cljs.core.PROTOCOL_SENTINEL === inst_31870);
var inst_31872 = (inst_31869) || (inst_31871);
var state_31910__$1 = state_31910;
if(cljs.core.truth_(inst_31872)){
var statearr_31930_32013 = state_31910__$1;
(statearr_31930_32013[(1)] = (35));

} else {
var statearr_31931_32014 = state_31910__$1;
(statearr_31931_32014[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (40))){
var inst_31885 = (state_31910[(20)]);
var inst_31884 = (state_31910[(2)]);
var inst_31885__$1 = cljs.core.get.call(null,inst_31884,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31886 = cljs.core.get.call(null,inst_31884,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31887 = cljs.core.not_empty.call(null,inst_31885__$1);
var state_31910__$1 = (function (){var statearr_31932 = state_31910;
(statearr_31932[(21)] = inst_31886);

(statearr_31932[(20)] = inst_31885__$1);

return statearr_31932;
})();
if(cljs.core.truth_(inst_31887)){
var statearr_31933_32015 = state_31910__$1;
(statearr_31933_32015[(1)] = (41));

} else {
var statearr_31934_32016 = state_31910__$1;
(statearr_31934_32016[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (33))){
var state_31910__$1 = state_31910;
var statearr_31935_32017 = state_31910__$1;
(statearr_31935_32017[(2)] = false);

(statearr_31935_32017[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (13))){
var inst_31783 = (state_31910[(22)]);
var inst_31787 = cljs.core.chunk_first.call(null,inst_31783);
var inst_31788 = cljs.core.chunk_rest.call(null,inst_31783);
var inst_31789 = cljs.core.count.call(null,inst_31787);
var inst_31770 = inst_31788;
var inst_31771 = inst_31787;
var inst_31772 = inst_31789;
var inst_31773 = (0);
var state_31910__$1 = (function (){var statearr_31936 = state_31910;
(statearr_31936[(7)] = inst_31770);

(statearr_31936[(8)] = inst_31773);

(statearr_31936[(9)] = inst_31771);

(statearr_31936[(10)] = inst_31772);

return statearr_31936;
})();
var statearr_31937_32018 = state_31910__$1;
(statearr_31937_32018[(2)] = null);

(statearr_31937_32018[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (22))){
var inst_31823 = (state_31910[(19)]);
var inst_31826 = (state_31910[(23)]);
var inst_31831 = (state_31910[(24)]);
var inst_31827 = (state_31910[(25)]);
var inst_31826__$1 = (state_31910[(2)]);
var inst_31827__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31826__$1);
var inst_31828 = (function (){var all_files = inst_31823;
var res_SINGLEQUOTE_ = inst_31826__$1;
var res = inst_31827__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31823,inst_31826,inst_31831,inst_31827,inst_31826__$1,inst_31827__$1,state_val_31911,c__28093__auto__,map__31755,map__31755__$1,opts,before_jsload,on_jsload,reload_dependents,map__31756,map__31756__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31505_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31505_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31823,inst_31826,inst_31831,inst_31827,inst_31826__$1,inst_31827__$1,state_val_31911,c__28093__auto__,map__31755,map__31755__$1,opts,before_jsload,on_jsload,reload_dependents,map__31756,map__31756__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31829 = cljs.core.filter.call(null,inst_31828,inst_31826__$1);
var inst_31830 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31831__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31830);
var inst_31832 = cljs.core.not_empty.call(null,inst_31831__$1);
var state_31910__$1 = (function (){var statearr_31938 = state_31910;
(statearr_31938[(26)] = inst_31829);

(statearr_31938[(23)] = inst_31826__$1);

(statearr_31938[(24)] = inst_31831__$1);

(statearr_31938[(25)] = inst_31827__$1);

return statearr_31938;
})();
if(cljs.core.truth_(inst_31832)){
var statearr_31939_32019 = state_31910__$1;
(statearr_31939_32019[(1)] = (23));

} else {
var statearr_31940_32020 = state_31910__$1;
(statearr_31940_32020[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (36))){
var state_31910__$1 = state_31910;
var statearr_31941_32021 = state_31910__$1;
(statearr_31941_32021[(2)] = false);

(statearr_31941_32021[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (41))){
var inst_31885 = (state_31910[(20)]);
var inst_31889 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31890 = cljs.core.map.call(null,inst_31889,inst_31885);
var inst_31891 = cljs.core.pr_str.call(null,inst_31890);
var inst_31892 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31891)].join('');
var inst_31893 = figwheel.client.utils.log.call(null,inst_31892);
var state_31910__$1 = state_31910;
var statearr_31942_32022 = state_31910__$1;
(statearr_31942_32022[(2)] = inst_31893);

(statearr_31942_32022[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (43))){
var inst_31886 = (state_31910[(21)]);
var inst_31896 = (state_31910[(2)]);
var inst_31897 = cljs.core.not_empty.call(null,inst_31886);
var state_31910__$1 = (function (){var statearr_31943 = state_31910;
(statearr_31943[(27)] = inst_31896);

return statearr_31943;
})();
if(cljs.core.truth_(inst_31897)){
var statearr_31944_32023 = state_31910__$1;
(statearr_31944_32023[(1)] = (44));

} else {
var statearr_31945_32024 = state_31910__$1;
(statearr_31945_32024[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (29))){
var inst_31823 = (state_31910[(19)]);
var inst_31829 = (state_31910[(26)]);
var inst_31863 = (state_31910[(16)]);
var inst_31826 = (state_31910[(23)]);
var inst_31831 = (state_31910[(24)]);
var inst_31827 = (state_31910[(25)]);
var inst_31859 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31862 = (function (){var all_files = inst_31823;
var res_SINGLEQUOTE_ = inst_31826;
var res = inst_31827;
var files_not_loaded = inst_31829;
var dependencies_that_loaded = inst_31831;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31823,inst_31829,inst_31863,inst_31826,inst_31831,inst_31827,inst_31859,state_val_31911,c__28093__auto__,map__31755,map__31755__$1,opts,before_jsload,on_jsload,reload_dependents,map__31756,map__31756__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31861){
var map__31946 = p__31861;
var map__31946__$1 = ((((!((map__31946 == null)))?((((map__31946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31946.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31946):map__31946);
var namespace = cljs.core.get.call(null,map__31946__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31823,inst_31829,inst_31863,inst_31826,inst_31831,inst_31827,inst_31859,state_val_31911,c__28093__auto__,map__31755,map__31755__$1,opts,before_jsload,on_jsload,reload_dependents,map__31756,map__31756__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31863__$1 = cljs.core.group_by.call(null,inst_31862,inst_31829);
var inst_31865 = (inst_31863__$1 == null);
var inst_31866 = cljs.core.not.call(null,inst_31865);
var state_31910__$1 = (function (){var statearr_31948 = state_31910;
(statearr_31948[(16)] = inst_31863__$1);

(statearr_31948[(28)] = inst_31859);

return statearr_31948;
})();
if(inst_31866){
var statearr_31949_32025 = state_31910__$1;
(statearr_31949_32025[(1)] = (32));

} else {
var statearr_31950_32026 = state_31910__$1;
(statearr_31950_32026[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (44))){
var inst_31886 = (state_31910[(21)]);
var inst_31899 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31886);
var inst_31900 = cljs.core.pr_str.call(null,inst_31899);
var inst_31901 = [cljs.core.str("not required: "),cljs.core.str(inst_31900)].join('');
var inst_31902 = figwheel.client.utils.log.call(null,inst_31901);
var state_31910__$1 = state_31910;
var statearr_31951_32027 = state_31910__$1;
(statearr_31951_32027[(2)] = inst_31902);

(statearr_31951_32027[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (6))){
var inst_31804 = (state_31910[(2)]);
var state_31910__$1 = state_31910;
var statearr_31952_32028 = state_31910__$1;
(statearr_31952_32028[(2)] = inst_31804);

(statearr_31952_32028[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (28))){
var inst_31829 = (state_31910[(26)]);
var inst_31856 = (state_31910[(2)]);
var inst_31857 = cljs.core.not_empty.call(null,inst_31829);
var state_31910__$1 = (function (){var statearr_31953 = state_31910;
(statearr_31953[(29)] = inst_31856);

return statearr_31953;
})();
if(cljs.core.truth_(inst_31857)){
var statearr_31954_32029 = state_31910__$1;
(statearr_31954_32029[(1)] = (29));

} else {
var statearr_31955_32030 = state_31910__$1;
(statearr_31955_32030[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (25))){
var inst_31827 = (state_31910[(25)]);
var inst_31843 = (state_31910[(2)]);
var inst_31844 = cljs.core.not_empty.call(null,inst_31827);
var state_31910__$1 = (function (){var statearr_31956 = state_31910;
(statearr_31956[(30)] = inst_31843);

return statearr_31956;
})();
if(cljs.core.truth_(inst_31844)){
var statearr_31957_32031 = state_31910__$1;
(statearr_31957_32031[(1)] = (26));

} else {
var statearr_31958_32032 = state_31910__$1;
(statearr_31958_32032[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (34))){
var inst_31879 = (state_31910[(2)]);
var state_31910__$1 = state_31910;
if(cljs.core.truth_(inst_31879)){
var statearr_31959_32033 = state_31910__$1;
(statearr_31959_32033[(1)] = (38));

} else {
var statearr_31960_32034 = state_31910__$1;
(statearr_31960_32034[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (17))){
var state_31910__$1 = state_31910;
var statearr_31961_32035 = state_31910__$1;
(statearr_31961_32035[(2)] = recompile_dependents);

(statearr_31961_32035[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (3))){
var state_31910__$1 = state_31910;
var statearr_31962_32036 = state_31910__$1;
(statearr_31962_32036[(2)] = null);

(statearr_31962_32036[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (12))){
var inst_31800 = (state_31910[(2)]);
var state_31910__$1 = state_31910;
var statearr_31963_32037 = state_31910__$1;
(statearr_31963_32037[(2)] = inst_31800);

(statearr_31963_32037[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (2))){
var inst_31762 = (state_31910[(13)]);
var inst_31769 = cljs.core.seq.call(null,inst_31762);
var inst_31770 = inst_31769;
var inst_31771 = null;
var inst_31772 = (0);
var inst_31773 = (0);
var state_31910__$1 = (function (){var statearr_31964 = state_31910;
(statearr_31964[(7)] = inst_31770);

(statearr_31964[(8)] = inst_31773);

(statearr_31964[(9)] = inst_31771);

(statearr_31964[(10)] = inst_31772);

return statearr_31964;
})();
var statearr_31965_32038 = state_31910__$1;
(statearr_31965_32038[(2)] = null);

(statearr_31965_32038[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (23))){
var inst_31823 = (state_31910[(19)]);
var inst_31829 = (state_31910[(26)]);
var inst_31826 = (state_31910[(23)]);
var inst_31831 = (state_31910[(24)]);
var inst_31827 = (state_31910[(25)]);
var inst_31834 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31836 = (function (){var all_files = inst_31823;
var res_SINGLEQUOTE_ = inst_31826;
var res = inst_31827;
var files_not_loaded = inst_31829;
var dependencies_that_loaded = inst_31831;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31823,inst_31829,inst_31826,inst_31831,inst_31827,inst_31834,state_val_31911,c__28093__auto__,map__31755,map__31755__$1,opts,before_jsload,on_jsload,reload_dependents,map__31756,map__31756__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31835){
var map__31966 = p__31835;
var map__31966__$1 = ((((!((map__31966 == null)))?((((map__31966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31966.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31966):map__31966);
var request_url = cljs.core.get.call(null,map__31966__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31823,inst_31829,inst_31826,inst_31831,inst_31827,inst_31834,state_val_31911,c__28093__auto__,map__31755,map__31755__$1,opts,before_jsload,on_jsload,reload_dependents,map__31756,map__31756__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31837 = cljs.core.reverse.call(null,inst_31831);
var inst_31838 = cljs.core.map.call(null,inst_31836,inst_31837);
var inst_31839 = cljs.core.pr_str.call(null,inst_31838);
var inst_31840 = figwheel.client.utils.log.call(null,inst_31839);
var state_31910__$1 = (function (){var statearr_31968 = state_31910;
(statearr_31968[(31)] = inst_31834);

return statearr_31968;
})();
var statearr_31969_32039 = state_31910__$1;
(statearr_31969_32039[(2)] = inst_31840);

(statearr_31969_32039[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (35))){
var state_31910__$1 = state_31910;
var statearr_31970_32040 = state_31910__$1;
(statearr_31970_32040[(2)] = true);

(statearr_31970_32040[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (19))){
var inst_31813 = (state_31910[(12)]);
var inst_31819 = figwheel.client.file_reloading.expand_files.call(null,inst_31813);
var state_31910__$1 = state_31910;
var statearr_31971_32041 = state_31910__$1;
(statearr_31971_32041[(2)] = inst_31819);

(statearr_31971_32041[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (11))){
var state_31910__$1 = state_31910;
var statearr_31972_32042 = state_31910__$1;
(statearr_31972_32042[(2)] = null);

(statearr_31972_32042[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (9))){
var inst_31802 = (state_31910[(2)]);
var state_31910__$1 = state_31910;
var statearr_31973_32043 = state_31910__$1;
(statearr_31973_32043[(2)] = inst_31802);

(statearr_31973_32043[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (5))){
var inst_31773 = (state_31910[(8)]);
var inst_31772 = (state_31910[(10)]);
var inst_31775 = (inst_31773 < inst_31772);
var inst_31776 = inst_31775;
var state_31910__$1 = state_31910;
if(cljs.core.truth_(inst_31776)){
var statearr_31974_32044 = state_31910__$1;
(statearr_31974_32044[(1)] = (7));

} else {
var statearr_31975_32045 = state_31910__$1;
(statearr_31975_32045[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (14))){
var inst_31783 = (state_31910[(22)]);
var inst_31792 = cljs.core.first.call(null,inst_31783);
var inst_31793 = figwheel.client.file_reloading.eval_body.call(null,inst_31792,opts);
var inst_31794 = cljs.core.next.call(null,inst_31783);
var inst_31770 = inst_31794;
var inst_31771 = null;
var inst_31772 = (0);
var inst_31773 = (0);
var state_31910__$1 = (function (){var statearr_31976 = state_31910;
(statearr_31976[(7)] = inst_31770);

(statearr_31976[(8)] = inst_31773);

(statearr_31976[(9)] = inst_31771);

(statearr_31976[(10)] = inst_31772);

(statearr_31976[(32)] = inst_31793);

return statearr_31976;
})();
var statearr_31977_32046 = state_31910__$1;
(statearr_31977_32046[(2)] = null);

(statearr_31977_32046[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (45))){
var state_31910__$1 = state_31910;
var statearr_31978_32047 = state_31910__$1;
(statearr_31978_32047[(2)] = null);

(statearr_31978_32047[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (26))){
var inst_31823 = (state_31910[(19)]);
var inst_31829 = (state_31910[(26)]);
var inst_31826 = (state_31910[(23)]);
var inst_31831 = (state_31910[(24)]);
var inst_31827 = (state_31910[(25)]);
var inst_31846 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31848 = (function (){var all_files = inst_31823;
var res_SINGLEQUOTE_ = inst_31826;
var res = inst_31827;
var files_not_loaded = inst_31829;
var dependencies_that_loaded = inst_31831;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31823,inst_31829,inst_31826,inst_31831,inst_31827,inst_31846,state_val_31911,c__28093__auto__,map__31755,map__31755__$1,opts,before_jsload,on_jsload,reload_dependents,map__31756,map__31756__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31847){
var map__31979 = p__31847;
var map__31979__$1 = ((((!((map__31979 == null)))?((((map__31979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31979.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31979):map__31979);
var namespace = cljs.core.get.call(null,map__31979__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31979__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31823,inst_31829,inst_31826,inst_31831,inst_31827,inst_31846,state_val_31911,c__28093__auto__,map__31755,map__31755__$1,opts,before_jsload,on_jsload,reload_dependents,map__31756,map__31756__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31849 = cljs.core.map.call(null,inst_31848,inst_31827);
var inst_31850 = cljs.core.pr_str.call(null,inst_31849);
var inst_31851 = figwheel.client.utils.log.call(null,inst_31850);
var inst_31852 = (function (){var all_files = inst_31823;
var res_SINGLEQUOTE_ = inst_31826;
var res = inst_31827;
var files_not_loaded = inst_31829;
var dependencies_that_loaded = inst_31831;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31823,inst_31829,inst_31826,inst_31831,inst_31827,inst_31846,inst_31848,inst_31849,inst_31850,inst_31851,state_val_31911,c__28093__auto__,map__31755,map__31755__$1,opts,before_jsload,on_jsload,reload_dependents,map__31756,map__31756__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31823,inst_31829,inst_31826,inst_31831,inst_31827,inst_31846,inst_31848,inst_31849,inst_31850,inst_31851,state_val_31911,c__28093__auto__,map__31755,map__31755__$1,opts,before_jsload,on_jsload,reload_dependents,map__31756,map__31756__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31853 = setTimeout(inst_31852,(10));
var state_31910__$1 = (function (){var statearr_31981 = state_31910;
(statearr_31981[(33)] = inst_31851);

(statearr_31981[(34)] = inst_31846);

return statearr_31981;
})();
var statearr_31982_32048 = state_31910__$1;
(statearr_31982_32048[(2)] = inst_31853);

(statearr_31982_32048[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (16))){
var state_31910__$1 = state_31910;
var statearr_31983_32049 = state_31910__$1;
(statearr_31983_32049[(2)] = reload_dependents);

(statearr_31983_32049[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (38))){
var inst_31863 = (state_31910[(16)]);
var inst_31881 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31863);
var state_31910__$1 = state_31910;
var statearr_31984_32050 = state_31910__$1;
(statearr_31984_32050[(2)] = inst_31881);

(statearr_31984_32050[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (30))){
var state_31910__$1 = state_31910;
var statearr_31985_32051 = state_31910__$1;
(statearr_31985_32051[(2)] = null);

(statearr_31985_32051[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (10))){
var inst_31783 = (state_31910[(22)]);
var inst_31785 = cljs.core.chunked_seq_QMARK_.call(null,inst_31783);
var state_31910__$1 = state_31910;
if(inst_31785){
var statearr_31986_32052 = state_31910__$1;
(statearr_31986_32052[(1)] = (13));

} else {
var statearr_31987_32053 = state_31910__$1;
(statearr_31987_32053[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (18))){
var inst_31817 = (state_31910[(2)]);
var state_31910__$1 = state_31910;
if(cljs.core.truth_(inst_31817)){
var statearr_31988_32054 = state_31910__$1;
(statearr_31988_32054[(1)] = (19));

} else {
var statearr_31989_32055 = state_31910__$1;
(statearr_31989_32055[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (42))){
var state_31910__$1 = state_31910;
var statearr_31990_32056 = state_31910__$1;
(statearr_31990_32056[(2)] = null);

(statearr_31990_32056[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (37))){
var inst_31876 = (state_31910[(2)]);
var state_31910__$1 = state_31910;
var statearr_31991_32057 = state_31910__$1;
(statearr_31991_32057[(2)] = inst_31876);

(statearr_31991_32057[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31911 === (8))){
var inst_31770 = (state_31910[(7)]);
var inst_31783 = (state_31910[(22)]);
var inst_31783__$1 = cljs.core.seq.call(null,inst_31770);
var state_31910__$1 = (function (){var statearr_31992 = state_31910;
(statearr_31992[(22)] = inst_31783__$1);

return statearr_31992;
})();
if(inst_31783__$1){
var statearr_31993_32058 = state_31910__$1;
(statearr_31993_32058[(1)] = (10));

} else {
var statearr_31994_32059 = state_31910__$1;
(statearr_31994_32059[(1)] = (11));

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
}
});})(c__28093__auto__,map__31755,map__31755__$1,opts,before_jsload,on_jsload,reload_dependents,map__31756,map__31756__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27981__auto__,c__28093__auto__,map__31755,map__31755__$1,opts,before_jsload,on_jsload,reload_dependents,map__31756,map__31756__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27982__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27982__auto____0 = (function (){
var statearr_31998 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31998[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27982__auto__);

(statearr_31998[(1)] = (1));

return statearr_31998;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27982__auto____1 = (function (state_31910){
while(true){
var ret_value__27983__auto__ = (function (){try{while(true){
var result__27984__auto__ = switch__27981__auto__.call(null,state_31910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27984__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27984__auto__;
}
break;
}
}catch (e31999){if((e31999 instanceof Object)){
var ex__27985__auto__ = e31999;
var statearr_32000_32060 = state_31910;
(statearr_32000_32060[(5)] = ex__27985__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27983__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32061 = state_31910;
state_31910 = G__32061;
continue;
} else {
return ret_value__27983__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27982__auto__ = function(state_31910){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27982__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27982__auto____1.call(this,state_31910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27982__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27982__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27982__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27982__auto__;
})()
;})(switch__27981__auto__,c__28093__auto__,map__31755,map__31755__$1,opts,before_jsload,on_jsload,reload_dependents,map__31756,map__31756__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28095__auto__ = (function (){var statearr_32001 = f__28094__auto__.call(null);
(statearr_32001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28093__auto__);

return statearr_32001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28095__auto__);
});})(c__28093__auto__,map__31755,map__31755__$1,opts,before_jsload,on_jsload,reload_dependents,map__31756,map__31756__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28093__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32064,link){
var map__32067 = p__32064;
var map__32067__$1 = ((((!((map__32067 == null)))?((((map__32067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32067.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32067):map__32067);
var file = cljs.core.get.call(null,map__32067__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__32067,map__32067__$1,file){
return (function (p1__32062_SHARP_,p2__32063_SHARP_){
if(cljs.core._EQ_.call(null,p1__32062_SHARP_,p2__32063_SHARP_)){
return p1__32062_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__32067,map__32067__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32073){
var map__32074 = p__32073;
var map__32074__$1 = ((((!((map__32074 == null)))?((((map__32074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32074.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32074):map__32074);
var match_length = cljs.core.get.call(null,map__32074__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32074__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32069_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32069_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args32076 = [];
var len__26996__auto___32079 = arguments.length;
var i__26997__auto___32080 = (0);
while(true){
if((i__26997__auto___32080 < len__26996__auto___32079)){
args32076.push((arguments[i__26997__auto___32080]));

var G__32081 = (i__26997__auto___32080 + (1));
i__26997__auto___32080 = G__32081;
continue;
} else {
}
break;
}

var G__32078 = args32076.length;
switch (G__32078) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32076.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32083_SHARP_,p2__32084_SHARP_){
return cljs.core.assoc.call(null,p1__32083_SHARP_,cljs.core.get.call(null,p2__32084_SHARP_,key),p2__32084_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__32085){
var map__32088 = p__32085;
var map__32088__$1 = ((((!((map__32088 == null)))?((((map__32088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32088.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32088):map__32088);
var f_data = map__32088__$1;
var file = cljs.core.get.call(null,map__32088__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32090,p__32091){
var map__32100 = p__32090;
var map__32100__$1 = ((((!((map__32100 == null)))?((((map__32100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32100):map__32100);
var opts = map__32100__$1;
var on_cssload = cljs.core.get.call(null,map__32100__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__32101 = p__32091;
var map__32101__$1 = ((((!((map__32101 == null)))?((((map__32101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32101.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32101):map__32101);
var files_msg = map__32101__$1;
var files = cljs.core.get.call(null,map__32101__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__32104_32108 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__32105_32109 = null;
var count__32106_32110 = (0);
var i__32107_32111 = (0);
while(true){
if((i__32107_32111 < count__32106_32110)){
var f_32112 = cljs.core._nth.call(null,chunk__32105_32109,i__32107_32111);
figwheel.client.file_reloading.reload_css_file.call(null,f_32112);

var G__32113 = seq__32104_32108;
var G__32114 = chunk__32105_32109;
var G__32115 = count__32106_32110;
var G__32116 = (i__32107_32111 + (1));
seq__32104_32108 = G__32113;
chunk__32105_32109 = G__32114;
count__32106_32110 = G__32115;
i__32107_32111 = G__32116;
continue;
} else {
var temp__4657__auto___32117 = cljs.core.seq.call(null,seq__32104_32108);
if(temp__4657__auto___32117){
var seq__32104_32118__$1 = temp__4657__auto___32117;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32104_32118__$1)){
var c__26702__auto___32119 = cljs.core.chunk_first.call(null,seq__32104_32118__$1);
var G__32120 = cljs.core.chunk_rest.call(null,seq__32104_32118__$1);
var G__32121 = c__26702__auto___32119;
var G__32122 = cljs.core.count.call(null,c__26702__auto___32119);
var G__32123 = (0);
seq__32104_32108 = G__32120;
chunk__32105_32109 = G__32121;
count__32106_32110 = G__32122;
i__32107_32111 = G__32123;
continue;
} else {
var f_32124 = cljs.core.first.call(null,seq__32104_32118__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_32124);

var G__32125 = cljs.core.next.call(null,seq__32104_32118__$1);
var G__32126 = null;
var G__32127 = (0);
var G__32128 = (0);
seq__32104_32108 = G__32125;
chunk__32105_32109 = G__32126;
count__32106_32110 = G__32127;
i__32107_32111 = G__32128;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__32100,map__32100__$1,opts,on_cssload,map__32101,map__32101__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__32100,map__32100__$1,opts,on_cssload,map__32101,map__32101__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1480863929376