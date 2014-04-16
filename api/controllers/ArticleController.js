/**
 * ArticleController.js 
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

  index: function(req, res) {
    Article.find().exec(function(err, articles) {
      if (err) return res.send(500);
      return res.view({articles: articles});
    });
  },

  find: function(req, res) {
    Article.findOne(req.param('id')).exec(function (err, article) {
      if (err) {
        return res.send(500);
      }
      return res.view('article/find', {article: article});
    });
  },
	
};
