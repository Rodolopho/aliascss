export let config= {
    //input files in glob pattern to get compiled
    input:'public/*.html',

    //Output css file , must exist or should be created manully if not exist
    output:'./public/css/acss.css',

    //Truncate the css file , you should let it true unless you know what your are doing
    truncate:true,
    	//input glob patterns, can be array of folder or files or both,

    //    
	custom:{
		color:{
			'main':"rgb(12,23,45)",// now you can use bgc-main
			'theme':'#c6c6c6'

		},
		length:{
			'1cv':'25%'
		}

	},
    // predine classname and
	extend:{
		//in browser-mode you can simply group class="c-blue" acss-group="color-primary"
		'outline-color':'color: blue',
		//now you can use it with device or seduo --hover-outline-color
	},
    //if you want to add some css statement 
	statement:`
        :root{
            --bg-color: teal;
            --outline-color:blue;
            --col-1:8.33%
            --col-2:calc(var(--col-1)*2)
            --col-3:calc(var(--col-1)*3)
            --col-4:calc(var(--col-1)*4)
            --col-5:calc(var(--col-1)*5)
            --col-6:50%
            --col-8:calc(var(--col-1)*8)
            --col-12:100*
        }

        body{
            font:BlinkMacSystemFont , -apple-system , "Segoe UI" , Roboto , Oxygen , Ubuntu , Cantarell , "Fira Sans" , "Droid Sans" , "Helvetica Neue" , Helvetica , Arial , sans-serif , "Apple Color Emoji" , "Segoe UI Emoji" , "Segoe UI Symbol" , "Noto Color Emoji";
        }

	`,

	// group classname in single classname
	group:{
		'container':'p15px border1px-solid-light',
		'row':'--hover-filter-blur1px '
	},
    //if some of the classname collide with other CSS framework like bootstrap and tailwindcss
    //You wanna ignore tell aliasccss to ignore it...
	ignore:['fs12px', 'c-red'],


}