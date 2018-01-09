var Office = function() {
    this.documents = [];
    this.managers = [];
    this.cleaners = [];
}
Office.prototype.hireCleaner = function(name) {
    var cleaner = new Cleaner(name);
    this.cleaners.push(cleaner);
}
Office.prototype.hireManager = function(name) {
    var manager = new Manager(name);
    this.managers.push(manager);
}
Office.prototype.startWorkDay = function() {
    for (var manager in this.managers) {
        this.managers[manager].askEmployeesToWork(this);
    }
    for (var cleaner in this.cleaners) {
        this.cleaners[cleaner].clean();
    }
}
var Manager = function(name) {
    this.employees = [];
    this.name = name;
}
Manager.prototype.hireEmployee = function(name) {
    var employee = new Employee(name);
    this.employees.push(employee);
}
Manager.prototype.askEmployeesToWork = function(office) {
    for (var emp in this.employees) {
        this.employees[emp].work(office);
    }
}
var Cleaner = function (name) {
    this.name = name;
}
Cleaner.prototype.clean = function() {
    console.log('Clean');
}
var Employee = function(name) {
    this.name = name;
};
Employee.prototype.work = function(office) {
    for (var i=0; i < 10; i++) {
        var document = new Document(this.name);
        office.documents.push(document);
    }
}
var Document = function (name) {
    this.employeeName = name;
}













