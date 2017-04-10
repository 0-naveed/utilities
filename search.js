//needle - string to search for
//hs - haystack
search = function(needle,hs){

	if(Array.isArray(hs)){
		hs.forEach(function(x){
		var res=[];
		var s=search(needle,x);
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

