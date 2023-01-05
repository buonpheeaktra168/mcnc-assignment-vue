<template>
    <div>
        <button v-for="tab in tabs" :key="tab" @click="component = tab">
            {{ tab }}
        </button>
    </div>
    <KeepAlive>
        <component :is="component" />
    </KeepAlive>
</template>

<script>
import { defineComponent } from 'vue';
import Notification from '../../notifications/view/NotificationView.vue';
import FetchUser from '../../notifications/view/FetchUserFromStoreView.vue';
import PostRequestView from '../../notifications/view/PostRequestView.vue';

export default defineComponent({
    components: { PostRequestView, Notification, FetchUser },
    data() {
        return {
            tabs: ["PostRequestView", "Notification", "FetchUser"],
            component: "PostRequestView"
        }
    }
})
</script>