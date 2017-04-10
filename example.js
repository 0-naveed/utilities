//in this example, the function will return only the matched branch (Main Object > data2 > obj > value_1
//needle - string to search for
//hs - haystack
search = function(needle,hs){
	console.log("--------------------------------------------------------------------------");
	console.log("needle,hs",needle,hs);

	if(Array.isArray(hs)){
		hs.forEach(function(x){
		var res=[];
		var s=search(needle,x);
		console.log('----arr',x,s);
		if(s){
			res.push(search(needle,x))
		}
	});
	if(res==[]){
		return false
	}else{
		return res
	}
	}
	else if(typeof hs=="object"&&typeof hs!==null){
		console.log('enter obj',hs);
		var res={};
		for(var key in hs){
				console.log('****','o1',key);
			if(search(needle,key)){
				console.log('****','o1.5',key);
				res[key]=hs[key]
			}else{
				s=search(needle,hs[key]);
				console.log('o2',hs,key,hs[key],s);
				if(s){
					res[key]=hs[key]
				}
			}
		}
		if(JSON.stringify(res)=='{}'){
			console.log(res,'obj end 1');
			return false
		}else{
			console.log('obj end 2',res);
			return res
		}
	}
	else if(typeof hs=="string"&&hs.match(needle)){
		console.log('++++','str',hs);
	return hs
	}
	return false
	}
x={
  "status": "success",
  "data": {
    "title": "sometitle",
    "value_1": 0,
    "value_2": 0,
    "host": "somehost",
    "obj": {"value_1":0},
	  "url": "/something"
	},
  "data2": {
    "title": "sometitle",
    "value_1": 0,
    "value_2": 0,
    "host": "somehost",
    "obj": {"value_1":"srch"},
	  "url": "/something"
	},
  "data3": {
    "title": "sometitle",
    "value_1": 0,
    "value_2": 0,
    "host": "somehost",
    "obj": {"value_1":0},
	  "url": "/something"
	}
	}
y=search("srch",x)

