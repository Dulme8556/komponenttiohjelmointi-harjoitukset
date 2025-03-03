<script>
    import { createEventDispatcher, getContext } from "svelte";
    const dispatch = createEventDispatcher();
    let tehtavat = getContext('tehtavat')
    
    let completed = true;

    const checkAll = () => {
        dispatch("checkAll", completed);
        completed = !completed;
    }

    const removeCompleted = () => dispatch("removeCompleted");

    let completedTodos = $derived(tehtavat.tehtavat.filter((t) => t.completed).length);
</script>

<div class="btn-group">
    <button type="button" class="btn btn__primary" 
    disabled={tehtavat.tehtavat.length === 0} onclick={checkAll}>{completed ? "Check" : "Uncheck"} all</button>
    <button type="button" class="btn btn__primary" 
    disabled={completedTodos === 0} onclick={removeCompleted}>Remove completed</button>
</div>