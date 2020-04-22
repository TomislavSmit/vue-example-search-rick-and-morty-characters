<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper"
                 @click.self="$emit('close')">
                <div class="row">
                    <div class="modal-container col-10 col-sm-8 col-md-5"
                         :class="{profile: modalContainerClass}">
                        <div class="col-md-12 mb-3">
                            <slot name="header"></slot>
                        </div>
                        <div class="col-md-12 mb-3">
                            <slot name="body"></slot>
                        </div>
                        <div class="col-md-12">
                            <slot name="footer"></slot>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
  export default {
    name: 'AuthModal',
    props: ['modalContainerClass']
  }
</script>
