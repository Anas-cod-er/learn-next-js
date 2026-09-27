export async function Postpone(request){
    //parse the json body from the client
    const body = await request.json();

    const {title, completed} =body;

    return Response.json({
        success: true,
        message: "Todo created successfully",
        todo:{
            title,
            completed
        }
    })
}