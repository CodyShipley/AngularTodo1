//This function creates the controller "Todo". The controller is not usually set up globbaly, because it can be seen as bad practice.
//But since this demo is short and sweet, it doesn't really affect anything.
function TodoCtrl($scope) {
    $scope.todos = [
      { text: 'Start teaching angular', finished: false },
      { text: 'build out an angular application', finished: false }];
    //Adds a new task, and checks to see if the task is finished or not.
    $scope.addToList = function () {
        $scope.todos.push({ text: $scope.todoText, finished: false });
        //Once Task is inserted, it then clears out the input box.
        $scope.todoText = '';
    };
    //Checks to see if task is completed
    $scope.remaining = function () {
        var count = 0;
        angular.forEach($scope.todos, function (todo) {
            //Defines how the task is counted down. For Example: If you were to change 0 to 0.5, it would start counting down by 0.5.
            count += todo.finished ? 0 : 1;
        });
        return count;
    };

    $scope.delete = function () {
        //set up a variable of current ToDo's in list.
        var oldTodos = $scope.todos;
        $scope.todos = [];
        //For each of the old tasks that are checked and marked as completed, delete on click.
        angular.forEach(oldTodos, function (todo) {
            if (!todo.finished) $scope.todos.push(todo);
        });
    };
}
