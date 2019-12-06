const path = require('path')
const ex = require('express');
const app = ex();
const fs = require('fs');

app.use(ex.static('public'));
app.use(ex.urlencoded({'extended':false}));

const deleteNote = (id) => {
    fs.readFile('db/db.json','utf8',(err,data)=>{
        if (err){
            throw err;
        } 

        let x = JSON.parse(data)
        let arr = x.filter((each)=>{
            if (Number(each.id) !== Number(id) ){
                return each
            }
        })
        arr = JSON.stringify(arr);
        fs.writeFile('db/db.json',arr,(err)=>{
            if (err) {
                throw err
            };
        })
    })
}

const idGenerator = () => {
    const a = fs.readFileSync('db/db.json','utf8');
    const b = (JSON.parse(a));
    const c = b.length - 1;
    if (b[c] === undefined) {
        return 1
    } else {
        return b[c].id + 1
    }
}

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

app.get('/api/notes',(req,res)=>{
    fs.readFile('./db/db.json', (err,content)=>{
        if (err){
            throw err
        }
        const x = JSON.parse(content);
        res.json(x)
    })

})

app.post('/api/notes',(req,res)=>{
    const {title , text } = req.body;
    fs.readFile('db/db.json', 'utf8', (err,data)=>{
        const x = JSON.parse(data);
        const id = idGenerator()
        x.push({title,text,id:id});
        fs.writeFile('db/db.json',JSON.stringify(x),(err)=>{
            if (err) {
                throw err
            }
        });
    });
    res.end()
})

app.delete('/api/notes/:id',(req,res)=>{
    const {id} = req.params;
    deleteNote(id)
    res.end()
})

app.listen(4000);