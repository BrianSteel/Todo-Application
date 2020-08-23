export default {
    name: "todo",

    data() {
        return {
            item: "",
            oldItem: "",
            id: 3,
            hover: false
        };
    },
    computed: {
        todos() {
            return this.$store.state.todos;
        },
        selectedVar() {
            return this.$store.state.selectedVar;
        },
        totalItems: function () {
            return this.$store.getters.totalItems;
        },
        todosSelected() {
            return this.$store.getters.todosSelected;
        },
        checkFor1: function () {
            return this.totalItems === 1 ? 'Item' : 'Items'
          }
    },
    methods: {
        input: function (item) {
            console.log(item.completed);
        },
        addItem: function () {
            if (this.item.trim().length == 0) {
                return;
            }
            this.$store.commit("addItem", {
                id: this.id,
                name: this.item,
            });
            this.item = "";
            this.id++;
            //this.totalItems = this.todos.length;
        },
        deleteItem: function (id) {
            this.$store.commit("deleteItem", id);
        },
        editItem(todo) {
            this.oldItem = todo.name;
            todo.edit = true;
        },
        showDelete: function () {
            this.hover = true;
            console.log(this.hover)
        },
        hideDelete: function () {
            this.hover = false;
            console.log(this.hover)
        },
        //dont use fat arrow function. _this become undefined
        doneEdit: function (todo) {
            if (todo.name.trim() == "") {
                todo.name = this.oldItem;
                return;
            }
            todo.edit = false;
            this.$store.commit("doneEdit", {
                id: todo.id,
                name: todo.name,
                edit: todo.edit,
            });
        },
        selectedfunc(value) {
            this.$store.commit('selectedfunc', value);
        },
        clearCompleted: function () {
            this.$store.commit('clearCompleted');
        },
    },
    directives: {
        focus: {
            // directive definition
            inserted: function (el) {
                el.focus();
            },
        },
    },
};