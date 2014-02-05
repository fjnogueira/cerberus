Template.newQuestion.events({
    'submit form': function(e) {
        e.preventDefault();
        var post = {
            title: $(e.target).find('[name=title]').val(),
            body: $(e.target).find('[name=body]').val(),
            author: 'John doe',
            date: new Date()
        }

        post._id = Questions.insert(post);
        Router.go('question', post);
    }
});