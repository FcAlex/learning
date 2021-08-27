// === === Class decorator === ===

//Factory
function Logger(prefix: string) {
    return (target: any) => {
        console.log(`${prefix} - ${target}`)
    }
}


@Logger('awesome')
class Foo {}

// ==========================

// decorator para anotar a versão da API
function setAPIVersion(apiVersion: string) {
    return (target: any) => {
        return class extends target {
            version = apiVersion
        }
    }
}

@setAPIVersion('1.0.0')
class API {}

console.log(new API())


// === === Property Decorator === ===

function minLength(length: number) {
    return (target: any, key: string) => {
        let val = target[key]

        const getter = () => val
        const setter = (value: string) => {
            if(value.length < length) {
                console.log(`ERROR: você não pode criar ${key} menor que ${length}.`)
            } else {
                val = value
            }
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        })
    }
}

class Movie {
    // quero fazer validação (se tamanho < 5)
    @minLength(5)
    title: string

    constructor(title: string) {
        this.title = title
    }
}

const movie = new Movie("Interstellar")
console.log(movie)

// === === Methods Decorator === ===

function delay(ms: number) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value

        descriptor.value = function (...args: any) {
            console.log(`Esperando ${ms}`)
            setTimeout(() => {
                originalMethod.apply(this, args)
            }, ms)
        }
    }
}

class Greeter {
    greeting: string

    constructor(greeting: string) {
        this.greeting = greeting
    }

    // espera um tempo e ai roda o metodo (um delay)
    @delay(1000)
    greet() {
        console.log(`Hello! ${this.greeting}`)
    }
}

const pessoa = new Greeter("World!")
console.log(pessoa.greet())

// Parameter decorator
// Acessor decorator