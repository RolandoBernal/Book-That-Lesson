app.factory('Lesson', ['$http','API_URL', function ($http, API_URL) {
    function addLesson(id, lesson, cb) {
      $http
        .post(`${API_URL}/lessons/${id}.json`, lesson)
        .success(cb);
    }
    function getMyLessons(id, cb) {
      $http
        .get(`${API_URL}/lessons/${id}.json`)
        .success(cb)
        .error(function(data, error) { console.log(error); });
    }
  function getAll(cb) {
    $http
      .get(`${API_URL}/lesson.json`)
      .success(cb);
  }
    return {addLesson:addLesson, getMyLessons:getMyLessons, getAll:getAll};
  }]);
