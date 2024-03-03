const { resolveInclude } = require('ejs');
const { v4: uuidv4 } = require ('uuid');

class MateriasModelos{
    todos(){
      return new Promise((resolve,reject)=>{
        let consulta = "SELECT * FROM materias"
        conexion.query(consulta,function(error,results,fields){
          if(error){
           reject(error)
          }else{
            resolve(results)
          }
        })
      });
    }
    uno(idReq) {
      return new Promise((resolve,reject)=>{
        let consulta = `SELECT  * FROM materias WHERE id=${idReq}`
        conexion.query(consulta,function(error,results,fields){
          if(error){
            reject(error)
          }else{
            resolve(results)
          }
        })
       })
    
    }
    
    crear(registro){
      return new Promise((resolve, reject) => {
        let nombreR = registro.nombre
        let codigoR= registro.codigo
             let consulta = `INSERT INTO materias (nombre, id, código) VALUES ('${nombreR}',"", '${codigoR}')`
             conexion.query(consulta,function(error,results,fields){
              if(error){
                reject(error)
              }else{
                resolve(results)
              }
             })
      })
    }

    modificar(idReq, nuevosValores) {
      let nombreR = nuevosValores.nombre
      let codigoR = nuevosValores.codigo
      let consulta = `UPDATE materias SET nombre = '${nombreR}', código = '${codigoR}' WHERE id = ${idReq}`
      conexion.query(consulta,function(error,results,fields){
        if(error){
          reject(error)
        }else{
          resolve(results)
       }
      }
    )}
    
    
  eliminar(idElemento){
    return new Promise((resolve, reject) => {
        let consulta = `DELETE FROM materias WHERE id=${idElemento}`
          conexion.query(consulta,function(error,results,fields){
            if(error){
              reject(error)
            }else{
              resolve(results)

            }
          })
         })
        }
}
module.exports = new MateriasModelos