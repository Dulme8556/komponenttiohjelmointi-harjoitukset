<script>
    import { createEventDispatcher, getContext, tick } from "svelte";
    import { selectedOnFocus } from "../actions.js"

    export let todo;
    let nameEl;

    const dispatch = createEventDispatcher();
    let tehtavat = getContext("tehtavat");

    let editing = false;
    let name = tehtavat.tehtavat.name;

    let editButtonPressed = false;

    function update(updatedTodo) {
        todo = { ...todo, ...updatedTodo };
        dispatch("update", todo);
    }

    function onCancel() {
        name = todo.name;
        editing = false;
    }

    function onSave(event) {
        event.preventDefault();
        update({ name });
        editing = false;
    }

    function onRemove() {
        dispatch("remove", todo);
    }

    function onEdit() {
        editButtonPressed = true;
        editing = true;
    }

    const focusEditButton = (node) => editButtonPressed && node.focus();

    const focusOnInit = (node) => 
        node && typeof node.focus === "function" && node.foucs();

    function onToggle() {
        todo.completed = !todo.completed;
    }
</script>

<div class="stack-small">
    {#if editing}
        <form
            onsubmit={onSave}
            class="stack-small"
            onkeydown={(e) => e.key === "Escape" && onCancel()}
        >
            <div class="form-group">
                <label for="todo-{todo.id}" class="todo-label"
                    >New name for '{todo.name}'</label
                >
                <input
                    bind:value={name}
                    bind:this={nameEl}
                    use:selectedOnFocus
                    use:focusOnInit
                    type="text"
                    id="todo-{todo.id}"
                    autocomplete="off"
                    class="todo-text"
                />
            </div>
            <div class="btn-group">
                <button
                    class="btn todo-cancel"
                    onclick={onCancel}
                    type="button"
                >
                    Cancel<span class="visually-hidden"
                        >renaming {todo.name}</span
                    >
                </button>
                <button
                    class="btn btn__primary todo-edit"
                    type="submit"
                    disabled={!name}
                >
                    Save<span class="visually-hidden"
                        >new name for {todo.name}</span
                    >
                </button>
            </div>
        </form>
    {:else}
        <div class="c-cb">
            <input
                type="checkbox"
                id="todo-{todo.id}"
                onclick={onToggle}
                checked={todo.completed}
            />
            <label for="todo-{todo.id}" class="todo-label">{todo.name}</label>
        </div>
        <div class="btn-group">
            <button type="button" class="btn" onclick={onEdit} use:focusEditButton>
                Edit <span class="visually-hidden">{todo.name}</span>
            </button>
            <button type="button" class="btn btn__danger" onclick={onRemove}>
                Delete <span class="visually-hidden">{todo.name}</span>
            </button>
        </div>
    {/if}
</div>
