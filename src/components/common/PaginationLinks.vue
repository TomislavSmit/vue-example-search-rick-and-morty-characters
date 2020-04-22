<template>
    <nav aria-label="Page navigation example"
         class="d-flex justify-content-center">
        <ul class="pagination">
            <li class="page-item"
                :class="{disabled: current === 1}">
                <button class="page-link"
                        @click="getPage(1)"><<
                </button>
            </li>
            <li class="page-item"
                :class="{disabled: current === 1}">
                <button class="page-link"
                        :disabled="current === 1"
                        @click="getPage(current-1)"><
                </button>
            </li>
            <li class="page-item"
                v-if="current === pages && pages > 2">
                <button class="page-link"
                        @click="getPage(current-2)">{{current-2}}
                </button>
            </li>
            <li class="page-item"
                :class="{disabled: current === 1}"
                v-if="current > 1 && pages > 1">
                <button class="page-link"
                        @click="getPage(current-1)">{{current-1}}
                </button>
            </li>
            <li class="page-item disabled">
                <button class="page-link">{{current}}
                </button>
            </li>
            <li class="page-item"
                v-if="current < pages && pages > 1">
                <button class="page-link"
                        @click="getPage(current+1)">{{current+1}}
                </button>
            </li>
            <li class="page-item"
                v-if="current === 1 && pages > 2">
                <button class="page-link"
                        @click="getPage(current+2)">{{current+2}}
                </button>
            </li>
            <li class="page-item"
                :class="{disabled: current === pages}">
                <button class="page-link"
                        @click="getPage(current+1)">>
                </button>
            </li>
            <li class="page-item"
                :class="{disabled: current === pages}">
                <button class="page-link"
                        @click="getPage(pages)">>>
                </button>
            </li>
        </ul>
    </nav>
</template>
<script>
  export default {
    name: 'PaginationLinks',
    props: {
      pages: {
        type: Number,
        required: false,
        default: 1
      },
      current: {
        type: Number,
        required: false,
        default: 1
      },
      getPage: {
        type: Function,
        required: true
      }
    }
  }
</script>
