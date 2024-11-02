

async function handlePostGPT(req,res){
    const question=req.body;
    const answer=await getGPTAnswer(question)
    return res.status(201).json(answer)
}

async function getGPTAnswer(que){
    const question=que;
    const ans=`This is a temparary answer \n${await chatGPTController(question)},\n${await geminiController(question)},\n${await claudeController(question)},\n${await copilotController(question)}`;
    return ans;
}
async function chatGPTController(ques){
    return `this is chatGPT answer`
}
async function geminiController(ques){
    return `this is gemini answer`
}
async function claudeController(ques){
    return `this is claude answer`
}
async function copilotController(ques){
    return `this is copilot answer`
}

module.exports={
    handlePostGPT,
    getGPTAnswer,
}
