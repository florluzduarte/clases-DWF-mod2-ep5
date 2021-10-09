// crear las clases Edificio, Piso y Departamento aquí

class Departamento {
    nombre: string;

    constructor(nombre:string) {
        this.nombre = nombre;
    }

    getName() {
        return this.nombre;
    }
}

class Piso {
    nombre: string;
    departamentos: Departamento[] = [];
    constructor(nombre:string){
        this.nombre = nombre;
    }

    pushDepartamento(depto:Departamento){
         this.departamentos.push(depto);
    }

    getDepartamento(){
        return this.departamentos;
    }
}

class Edificio {
    pisos: Piso[];

    constructor(listaDePisos:Piso[]){
        this.pisos = listaDePisos;
    }

    addDepartamentoToPiso(nombreDePiso:string, departamento:Departamento){
        const resultadoPisoBuscado = this.pisos.find( piso => {
         return piso.nombre == nombreDePiso;
        })
        if(resultadoPisoBuscado){
            resultadoPisoBuscado.pushDepartamento(departamento);
        } else {
            console.log("Error. El piso buscado no existe");
        }
    }

    getDepartamentosByPiso(nombreDelPiso:string){
        const resultado = this.pisos.find(piso => {
            return piso.nombre == nombreDelPiso;
        })
        return resultado.getDepartamento();
    }
    }

// no modificar este test
function testClaseEdificio() {
    const unPiso = new Piso("planta baja");
    const otroPiso = new Piso("primer piso");
    const unEdificio = new Edificio([unPiso, otroPiso]);
    const deptoUno = new Departamento("depto uno");
    const deptoDos = new Departamento("depto dos");
    const deptoTres = new Departamento("depto tres");
    unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
    unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
    unEdificio.addDepartamentoToPiso("planta baja", deptoTres);
  
    const deptos = unEdificio.getDepartamentosByPiso("planta baja");
    const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");
  
    if (
      Array.isArray(deptosEmpty) &&
      deptosEmpty.length == 0 &&
      deptos.length == 3 &&
      deptos[2].getName() == "depto tres"
    ) {
      console.log("testClaseBandaApartment passed");
    } else {
      throw "testClaseBandaApartment not passed";
    }
  }
  
  function main() {
    testClaseEdificio();
  }
  main();