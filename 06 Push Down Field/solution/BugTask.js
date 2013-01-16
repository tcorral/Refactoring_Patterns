function BugTask() {
    Task.call(this);
    this.sResolution = '';
}
BugTask.prototype = new Task();