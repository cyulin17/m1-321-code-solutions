document.querySelector('.task-list').addEventListener('click', function (e) {
  console.log('event target:', event.target);
  console.log('event target tagName:', event.target.tagName);

  if (event.target.tagName === 'button') {
    return;
  }

  var $taskListItem = event.target.closest('.task-list-item');
  console.log('closest .task-list-item', $taskListItem);
  $taskListItem.remove();

});
