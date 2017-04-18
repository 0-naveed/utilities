//needle - string to search for
//hs - haystack
search = function(needle,hs){
	if(Array.isArray(hs)){
		var res=[];
		hs.forEach(function(x){
		var s=search(needle,x);

		if(s){
			res.push(s)
		}
	});
	if(res.length === 0){
		return false
	}else{
		return res
	}
	}
	else if(typeof hs=="object"&&typeof hs!==null){
		var res={};
		for(var key in hs){

			if(search(needle,key)){

				res[key]=hs[key]
			}else{
				s=search(needle,hs[key]);

				if(s){
					res[key]=hs[key]
				}
			}
		}
		if(JSON.stringify(res)=='{}'){
			return false
		}else{

			return res
		}
	}
	else if(typeof hs=="string"&&hs.match(needle)){
	return hs
	}
	return false
	}
/* Example: For Testing
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
    "obj": {"value_1":["srch","t1"]},
	  "url": "/something"
	},
  "data3": {
    "title": "sometitle55",
    "value_155": 0,
    "value_255": 0,
    "host": "somehost55",
    "obj": {"value_155":0},
	  "url": "/something55"
	}
	}
y=search("srch",x)
*/
