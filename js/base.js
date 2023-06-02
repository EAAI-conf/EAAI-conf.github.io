#!/usr/bin/env node
var optimist = require('optimist');
var commander = require('commander');
var args = optimist.argv;
var fs = require('fs');
var colors = require('colors');



if(args.new){
	if(args.new && args.from){
		var from = require(__dirname+'/bases/'+args.from+'.json');

		fs.writeFile(args.new,from.content,function(err){
			console.log(args.new + ' Created'.green+' From ' + args.from.green)
		});
	}else{
		fs.writeFile(args.new,'',function(err){
			console.log(args.new + ' Created'.green)
		});
	}


	
}

if(args.save && args.as){
	fs.readFile(args.save,'utf8', function(err,data){
		var file = {};
		file.content = data;
		if(!err){
			fs.writeFile(__dirname+'/bases/'+args.as+'.json',JSON.stringify(file), function(err){
				console.log(args.as + 'Saved!'.green);
			});
		}
	});
}










