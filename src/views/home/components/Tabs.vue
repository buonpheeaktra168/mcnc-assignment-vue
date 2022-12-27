<template>
    <div>
        <button v-for="tab in tabs" :key="tab" @click="component = tab">
            {{ tab }}
        </button>
        <KeepAlive>
            <component :is="component" />
        </KeepAlive>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import Notification from '../../notifications/view/NotificationView.vue';
import FetchUserFromStoreView from '../../notifications/view/FetchUserFromStoreView.vue';
import PostRequestView from '../../notifications/view/PostRequestView.vue';

export default defineComponent({
    components: { Notification, FetchUserFromStoreView, PostRequestView },
    data() {
        return {
            tabs: ["Notification", "FetchUserFromStoreView", "PostRequestView"],
            component: "Notification"
        }
    }
})
</script>