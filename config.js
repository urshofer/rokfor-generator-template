
module.exports = {
  pages : [
	{
		template    : 'page/0_pre.tex',
		controller  : function(module){return({Title: "Dies ist der Titel", Autor: "Autor"});}
	},
	{
		template    : 'page/1_page.tex',
		controller  : function(module){return({Text: {
						  'ketchup': '5 tbsp',
						  'mustard': '1 tbsp',
						  'pickle': '0 tbsp'
						}});}
	},
	{
		template    : 'page/2_post.tex',
		controller  : function(module){return({Footer: "Fusszeile"});}
	}
  ],
  cover : [
	{
		template    : 'page/cover.tex',
		controller  : function(module){

			return({
				Title:   "The Generator", 
				Subject: "About generating pdf documents", 
				Author:  "Max Muster",
				Abstract: module.md2Tex("Someting in __markdown__")
			});
		}
	}
  ]  
}
