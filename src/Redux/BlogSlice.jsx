import { createSlice } from "@reduxjs/toolkit"
import Helper from "../Utils/Helper";
import toast from "react-hot-toast";

export const BlogSlice = createSlice(
    {
        name: 'blogs',
        initialState: [
            {
                id: 1,
                title: "Web Development",
                description: "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.",
                image: "https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg",
                status: true
            },
            {
                id: 2,
                title: "Formula 1",
                description: "Formula One, commonly known as Formula 1 or F1, is the highest class of international racing for open-wheel single-seater formula racing cars sanctioned by the Fédération Internationale de l'Automobile.",
                image: "https://media.formula1.com/image/upload/t_16by9Centre/f_auto/q_auto/v1707905211/fom-website/2023/Mercedes/W15%20launch/Mercedes-AMG%20W15%20E%20PERFORMANCE%20-%20Lewis%20Hamilton%20-%20Front%20Quarter.jpg",
                status: true
            },
            {
                id: 3,
                title: "Moto GP",
                description: "Grand Prix motorcycle racing is the highest class of motorcycle road racing events held on road circuits sanctioned by the Fédération Internationale de Motocyclisme.",
                image: "https://media.gq-magazine.co.uk/photos/5d13a34d9fa6010220839521/16:9/w_2560%2Cc_limit/Moto-GP-06-GQ-27Jul16_getty_b.jpg",
                status: true
            }
        ],
        reducers: {
            CREATE: (state, action) => {
                action.payload.id = state.length ? state[state.length-1].id+1 : 1;
                action.payload.status = false;
                console.log(action.payload);
                state.push(action.payload);
            },
            DELETE: (state, action) => {
                let index = Helper.findIndexById(state, action.payload)
                if(index !== -1){
                    state.splice(index, 1);
                }
                else{
                    toast.error("InValid ID")
                }
            },
            CHANGE_STATUS: (state, action)=>{
                let index = Helper.findIndexById(state, action.payload);
                state[index].status = !state[index].status;
            },
            EDIT: (state, action)=>{
                let index = Helper.findIndexById(state, action.payload.id);
                if(index !== -1){
                    state.splice(index, 1, action.payload);
                }
            }
        }
    }
)

export const {CREATE, DELETE, CHANGE_STATUS, EDIT} = BlogSlice.actions

export default BlogSlice.reducer