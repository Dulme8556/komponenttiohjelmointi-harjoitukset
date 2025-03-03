<script>
    import { getContext, onMount } from "svelte";
    import { selectedOnFocus } from "../actions";

    let tehtavat = getContext('tehtavat')
    
    export let autofocus = true;

    let newTodoName = "";
    let newTodoId = "";
    let nameEl;

    onMount(() => autofocus && nameEl.focus());
    
    $: newTodoId = tehtavat.tehtavat.length ? Math.max(...tehtavat.tehtavat.map((t) => t.id)) + 1: 1;
    
    function addTodo(event) {
        event.preventDefault();
        tehtavat.tehtavat = [...tehtavat.tehtavat,{ id: newTodoId, name: newTodoName, completed: false}];
        newTodoName = "";
        nameEl.focus();
    }

    const onCancel = () => {
        newTodoName = '';
        nameEl.focus();
    }

    onMount(() => 
        autofocus && nameEl.focus()
    );

</script>

<style>
    
</style>

<form onsubmit={addTodo} onkeydown={(e) => e.key === 'Escape' && onCancel()}>
    <h2 class="label-wrapper">
        <label for="todo-0" class="label__lg"> What needs to be done? </label>
    </h2>
    <input 
    bind:value={newTodoName}
    bind:this={nameEl}
    use:selectedOnFocus
    type="text" 
    id="todo-0"
    autocomplete="off"
    class="input input__lg">
    <button type="submit" disabled={!newTodoName} class="btn btn__primary btn__lg">
        Add
    </button>
</form>