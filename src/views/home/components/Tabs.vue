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
import FetchUser from '../../notifications/view/FetchUserFromStoreView.vue';
import PostRequestView from '../../notifications/view/PostRequestView.vue';

export default defineComponent({
    components: { Notification, FetchUser, PostRequestView },
    data() {
        return {
            tabs: ["Notification", "FetchUser", "PostRequestView"],
            component: "Notification"
        }
    }
})
</script>