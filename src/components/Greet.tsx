type GreetProps ={
    name:string
    messageCount ?:number
    isLogedIn:boolean
}
export const Greet=(props:GreetProps)=>{
    const {messageCount =0} =props
    return (
        <div>
            <h2>
                {props.isLogedIn? 
                'Welcome {props.name}! You have {props.messageCount} notifications'
                :'welcome Guest'
                }
                
            </h2>
        </div>
    )
}