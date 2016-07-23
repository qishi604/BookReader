<template>
    <div id="app">
        <book></book>
        <div>this is template body</div>
    </div>
</template>
<script>
    import Book from 'Book.vue'
    export default{
        name: 'Main',
        components:{
            'book': Book,
        }
    }
</script>
