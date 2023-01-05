<template>
    <div class="todo-container">
        <div>
            <form @submit.prevent="handleSubmit" id="form">
                <div>
                    <input v-model.trimp="title" type="text" placeholder="Add todo..." />
                    <input v-model.trimp="description" type="text" placeholder="Description..." />
                </div>
                <button>{{ $t('button.add') }}</button>
            </form>
        </div>
        <div v-if="store.isLoading">
            <LoadingSpinner title="loading todo..." />
        </div>
        <div v-if="store.isTodos.length === 0">
            <h1>Empty Todo</h1>
        </div>
        <div class="wrapper">
            <div v-for="todo in store.isTodos" :key="todo.id" class="todo-card-box">
                <div>
                    <h2>{{ todo.title }}</h2>
                </div>
                <div class="button-card">
                    <button @click="todoDetail(todo.id)">{{ $t('button.details') }}</button>
                    <button @click="todoUpdate(todo.id)" class="edit-button">{{ $t('button.edit') }}</button>
                    <button @click="store.deleteTodo(todo.id)" class="button-delete">{{ $t('button.delete') }}</button>
                </div>
            </div>
        </div>

    </div>

</template>

<script setup>
import { useTodoStore } from '../store/useTodoStore';
import LoadingSpinner from '../../../components/LoadingSpinner.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const title = ref('')
const description = ref('')

const store = useTodoStore()
store.getTodos();

const handleSubmit = async () => {
    await store.addTodos(title.value, description.value)
    title.value = ''
    description.value = ''
}


const todoDetail = (id) => {
    router.push({ name: 'todoDetail', params: { id: id } })
}

const todoUpdate = (id) => {
    router.push({ name: 'todoFirebasePiniaUpdate', params: { id: id } })
}

</script>

<style lang="scss" scoped>
.todo-container {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-top: 120px;
    justify-content: center;

    #form {
        display: flex;
        justify-content: center;
        padding: 5px 5px;
        margin: 0 auto;
        flex-direction: column;

        input {
            width: 100%;
            height: 30px;
            padding: 10px 0 10px 20px;
            margin: 8px 0;
            border: 0px;
            outline-color: blue;
        }

        button {
            width: 120px;
        }
    }

    .wrapper {
        display: grid;
        margin-top: 80px;
        grid-template-columns: 400px 400px 300px;
        justify-content: center;

        .todo-card-box {
            display: grid;
            width: 340px;
            height: 200px;
            box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
            background-color: #ffff;
            border-radius: 12px;
            flex-direction: column;
            padding: 2px 12px 2px 12px;
            margin: 0 12px 0 12px;
            align-items: center;
            justify-content: space-between;
            margin-top: 12px;

            .button-card {
                justify-content: flex-end;
                align-items: flex-end;

                .button-delete {
                    background-color: crimson;
                }

                .edit-button {
                    background-color: blue;
                }

            }
        }
    }
}

@media (max-width: 1080px) {
    .todo-container {
        display: flex;
        flex: 1;
        flex-direction: column;
        margin-top: 120px;
        justify-content: center;

        #form {
            display: flex;
            justify-content: center;
            padding: 5px 5px;
            margin: 0 auto;
            flex-direction: column;

            input {
                width: 100%;
                height: 30px;
                padding: 10px 0 10px 20px;
                margin: 8px 0;
                border: 0px;
                outline-color: blue;
            }

            button {
                width: 120px;
            }
        }

        .wrapper {
            display: grid;
            margin-top: 80px;
            grid-template-columns: 370px 370px;
            justify-content: center;

            .todo-card-box {
                display: grid;
                width: 320px;
                height: 200px;
                box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
                background-color: #ffff;
                border-radius: 12px;
                flex-direction: column;
                padding: 2px 12px 2px 12px;
                align-items: center;
                justify-content: space-between, center;
                margin-top: 12px;

                .button-card {
                    justify-content: flex-end;
                    align-items: flex-end;

                    .button-delete {
                        background-color: crimson;
                    }

                    .edit-button {
                        background-color: blue;
                    }

                }
            }
        }
    }

}

@media (max-width: 913px) {
    .todo-container {
        display: flex;
        flex: 1;
        flex-direction: column;
        margin-top: 120px;
        justify-content: center;

        #form {
            display: flex;
            justify-content: center;
            padding: 5px 5px;
            margin: 0 auto;
            flex-direction: column;

            input {
                width: 90%;
                height: 30px;
                padding: 10px 0 10px 20px;
                margin: 8px 0;
                border: 0px;
                outline-color: blue;
            }

            button {
                width: 120px;
            }
        }

        .wrapper {
            display: grid;
            margin-top: 80px;
            grid-template-columns: 400px 390px;
            justify-content: center;

            .todo-card-box {
                display: grid;
                width: 360px;
                height: 300px;
                box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
                background-color: #ffff;
                border-radius: 12px;
                flex-direction: column;
                padding: 2px 12px 2px 12px;
                align-items: center;
                justify-content: center;
                margin-top: 12px;

                .button-card {
                    justify-content: flex-end;
                    align-items: flex-end;

                    .button-delete {
                        background-color: crimson;
                    }

                    .edit-button {
                        background-color: blue;
                    }

                }
            }
        }
    }

}

@media (max-width: 821px) {
    .todo-container {
        display: flex;
        flex: 1;
        flex-direction: column;
        margin-top: 120px;
        justify-content: center;

        #form {
            display: flex;
            justify-content: center;
            padding: 5px 5px;
            margin: 0 auto;
            flex-direction: column;

            input {
                width: 90%;
                height: 30px;
                padding: 10px 0 10px 20px;
                margin: 8px 0;
                border: 0px;
                outline-color: blue;
            }

            button {
                width: 120px;
            }
        }

        .wrapper {
            display: grid;
            margin-top: 80px;
            grid-template-columns: 370px 370px;
            justify-content: center;

            .todo-card-box {
                display: grid;
                width: 320px;
                height: 200px;
                box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
                background-color: #ffff;
                border-radius: 12px;
                flex-direction: column;
                padding: 2px 12px 2px 12px;
                align-items: center;
                justify-content: space-between, center;
                margin-top: 12px;

                .button-card {
                    justify-content: flex-end;
                    align-items: flex-end;

                    .button-delete {
                        background-color: crimson;
                    }

                    .edit-button {
                        background-color: blue;
                    }

                }
            }
        }
    }

}

@media (max-width: 720px) {
    .todo-container {
        display: flex;
        flex: 1;
        flex-direction: column;
        margin-top: 120px;
        justify-content: center;

        #form {
            display: flex;
            justify-content: center;
            padding: 5px 5px;
            margin: 0 auto;
            flex-direction: column;

            input {
                width: 100%;
                height: 30px;
                padding: 10px 0 10px 20px;
                margin: 8px 0;
                border: 0px;
                outline-color: blue;
            }

            button {
                width: 120px;
            }
        }

        .wrapper {
            display: grid;
            margin-top: 80px;
            grid-template-columns: 370px;
            justify-content: center;

            .todo-card-box {
                display: grid;
                width: 400px;
                height: 200px;
                box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
                background-color: #ffff;
                border-radius: 12px;
                flex-direction: column;
                padding: 2px 12px 2px 12px;
                align-items: center;
                justify-content: center;

                margin-top: 12px;

                .button-card {
                    justify-content: flex-end;
                    align-items: flex-end;

                    .button-delete {
                        background-color: crimson;
                    }

                    .edit-button {
                        background-color: blue;
                    }

                }
            }
        }
    }

}

@media (max-width: 376px) {
    .todo-container {
        display: flex;
        flex: 1;
        flex-direction: column;
        margin-top: 120px;
        justify-content: center;

        #form {
            display: flex;
            justify-content: center;
            padding: 5px 5px;
            margin: 0 auto;
            flex-direction: column;

            input {
                width: 90%;
                height: 30px;
                padding: 10px 0 10px 20px;
                margin: 8px 0;
                border: 0px;
                outline-color: blue;
            }

            button {
                width: 120px;
            }
        }

        .wrapper {
            display: grid;
            margin-top: 80px;
            grid-template-columns: 390px;
            justify-content: center;

            .todo-card-box {
                display: grid;
                width: 340px;
                height: 200px;
                box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
                background-color: #ffff;
                border-radius: 12px;
                flex-direction: column;
                padding: 2px 12px 2px 12px;
                align-items: center;
                justify-content: center;

                margin-top: 12px;

                .button-card {
                    justify-content: flex-end;
                    align-items: flex-end;

                    .button-delete {
                        background-color: crimson;
                    }

                    .edit-button {
                        background-color: blue;
                    }

                }
            }
        }
    }

}

@media (max-width: 391px) {
    .todo-container {
        display: flex;
        flex: 1;
        flex-direction: column;
        margin-top: 120px;
        justify-content: center;

        #form {
            display: flex;
            justify-content: center;
            padding: 5px 5px;
            margin: 0 auto;
            flex-direction: column;

            input {
                width: 90%;
                height: 30px;
                padding: 10px 0 10px 20px;
                margin: 8px 0;
                border: 0px;
                outline-color: blue;
            }

            button {
                width: 120px;
            }
        }

        .wrapper {
            display: grid;
            margin-top: 80px;
            grid-template-columns: 390px;
            justify-content: center;

            .todo-card-box {
                display: grid;
                width: 340px;
                height: 200px;
                box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
                background-color: #ffff;
                border-radius: 12px;
                flex-direction: column;
                padding: 2px 12px 2px 12px;
                align-items: center;
                justify-content: center;

                margin-top: 12px;

                .button-card {
                    justify-content: flex-end;
                    align-items: flex-end;

                    .button-delete {
                        background-color: crimson;
                    }

                    .edit-button {
                        background-color: blue;
                    }

                }
            }
        }
    }

}

@media (max-width: 415px) {
    .todo-container {
        display: flex;
        flex: 1;
        flex-direction: column;
        margin-top: 120px;
        justify-content: center;

        #form {
            display: flex;
            justify-content: center;
            padding: 5px 5px;
            margin: 0 auto;
            flex-direction: column;

            input {
                width: 90%;
                height: 30px;
                padding: 10px 0 10px 20px;
                margin: 8px 0;
                border: 0px;
                outline-color: blue;
            }

            button {
                width: 120px;
            }
        }

        .wrapper {
            display: grid;
            margin-top: 80px;
            grid-template-columns: 390px;
            justify-content: center;

            .todo-card-box {
                display: grid;
                width: 350px;
                height: 200px;
                box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
                background-color: #ffff;
                border-radius: 12px;
                flex-direction: column;
                padding: 2px 12px 2px 12px;
                align-items: center;
                justify-content: center;

                margin-top: 12px;

                .button-card {
                    justify-content: flex-end;
                    align-items: flex-end;

                    .button-delete {
                        background-color: crimson;
                    }

                    .edit-button {
                        background-color: blue;
                    }

                }
            }
        }
    }

}

@media (max-width: 541px) {
    .todo-container {
        display: flex;
        flex: 1;
        flex-direction: column;
        margin-top: 120px;
        justify-content: center;

        #form {
            display: flex;
            justify-content: center;
            padding: 5px 5px;
            margin: 0 auto;
            flex-direction: column;

            input {
                width: 90%;
                height: 30px;
                padding: 10px 0 10px 20px;
                margin: 8px 0;
                border: 0px;
                outline-color: blue;
            }

            button {
                width: 120px;
            }
        }

        .wrapper {
            display: grid;
            margin-top: 80px;
            grid-template-columns: 420px;
            justify-content: center;

            .todo-card-box {
                display: grid;
                width: 400px;
                height: 300px;
                box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
                background-color: #ffff;
                border-radius: 12px;
                flex-direction: column;
                padding: 2px 12px 2px 12px;
                align-items: center;
                justify-content: center;

                margin-top: 12px;

                .button-card {
                    justify-content: flex-end;
                    align-items: flex-end;

                    .button-delete {
                        background-color: crimson;
                    }

                    .edit-button {
                        background-color: blue;
                    }

                }
            }
        }
    }

}

@media (max-width: 360px) {
    .todo-container {
        display: flex;
        flex: 1;
        flex-direction: column;
        margin-top: 120px;
        justify-content: center;

        #form {
            display: flex;
            justify-content: center;
            padding: 5px 5px;
            margin: 0 auto;
            flex-direction: column;

            input {
                width: 90%;
                height: 30px;
                padding: 10px 0 10px 20px;
                margin: 8px 0;
                border: 0px;
                outline-color: blue;
            }

            button {
                width: 120px;
            }
        }

        .wrapper {
            display: grid;
            margin-top: 80px;
            grid-template-columns: 370px;
            justify-content: center;

            .todo-card-box {
                display: grid;
                width: 320px;
                height: 200px;
                box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
                background-color: #ffff;
                border-radius: 12px;
                flex-direction: column;
                padding: 2px 12px 2px 12px;
                align-items: center;
                justify-content: center;

                margin-top: 12px;

                .button-card {
                    justify-content: flex-end;
                    align-items: flex-end;

                    .button-delete {
                        background-color: crimson;
                    }

                    .edit-button {
                        background-color: blue;
                    }

                }
            }
        }
    }

}

@media (max-width: 281px) {
    .todo-container {
        display: flex;
        flex: 1;
        flex-direction: column;
        margin-top: 120px;
        justify-content: center;

        #form {
            display: flex;
            justify-content: center;
            padding: 5px 5px;
            margin: 0 auto;
            flex-direction: column;

            input {
                width: 90%;
                height: 30px;
                padding: 10px 0 10px 20px;
                margin: 8px 0;
                border: 0px;
                outline-color: blue;
            }

            button {
                width: 120px;
            }
        }

        .wrapper {
            display: grid;
            margin-top: 80px;
            grid-template-columns: 300px;
            justify-content: center;

            .todo-card-box {
                display: grid;
                width: 250px;
                height: 200px;
                box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
                background-color: #ffff;
                border-radius: 12px;
                flex-direction: column;
                padding: 2px 12px 2px 12px;
                align-items: center;
                justify-content: center;

                margin-top: 12px;

                .button-card {
                    flex: 1;
                    flex-direction: row;

                    button {
                        width: 40px;
                        height: 25px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .button-delete {
                        background-color: crimson;
                    }

                    .edit-button {
                        background-color: blue;
                    }

                }
            }
        }
    }

}
</style>