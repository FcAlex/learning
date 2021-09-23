# Sumário
- [Criacionais](#criacionais)
- [Estruturais](#estruturais)
- [Criacionais](#criacionais)

# Padrões de Projeto

# Criacionais

- Os padrões de projeto de criação são padrões que abstraem o processo de instanciação de objetos. Eles ajudam a tornar um sistema independente de como seus objetos são representados, criados e compostos. Geralmente, atingem este objetivo delegando tarefas para outros objetos.
- Esses padrões dão muita flexibilidade ao sistema, porque encapsulam o conhecimento sobre quais classes concretas são usadas. Além disso, ocultam o modo como as instâncias são criadas e compostas. O foco é eliminar conhecimento do cliente sobre o *QUE*, *COMO* e *QUANDO* está sendo criado e *QUEM* faz parte do processo de criação.

## Singleton

### Intenção

- Garantir que uma classe tenha somente uma instância no programa e fornecer um ponto de acesso global para a mesma.

### Conceitos

- Geralmente usado para acesso a recurso compartilhado, como acesso à base de dados, interface gráfica, sistema de arquivos, servidores e impressão, logger e mais.
- Você pode permitir acesso global ao Singleton em toda sua aplicação, assim como fazíamos com variáveis globais.
- Uma vantagem do Singleton é que podemos proteger a instância com encapsulamento.
- Use o singleton quando uma classe precisa ter somente uma instância disponível em todo o seu programa
- Use o singleton quando perceber que está usando variáveis globais para manter partes importantes do programa, como variáveis de configuração que são usadas por toda o programa

## Builder

### Intenção

- Separar a construção de um objeto complexo da sua representação de modo que o mesmo processo de construção possa criar diferentes representações.

### Conceitos

- O padrão sugere a separação do código que cria e o código que usa o objeto
- Trata da criação de objetos complexos (complexos de verdade)
    - Construtores muito complexos
    - Composição de vários objetos (composite)
    - Algoritmo de criação do objeto complexo
- Permite a criação de um objeto em etapas
- Permite *method chaining*
- O objeto final pode variar de acordo com a necessidade
- É um padrão complexo

## Prototype

### Intenção

- Especificar os tipos de objetos a serem criados usando uma instância-protótipo e criar novos objetos pela cópia desse protótipo.

### Conceitos

- O tipo de objeto a ser criado é determinado pelo objeto protótipo
- É tipicamente usado para evitar a recriação de objetos "caros"
- Ajuda a evitar a explosão de subclasses
- Pode (ou não) manter um registro de objetos protótipo em um objeto separado
- Geralmente é criado apenas com um método "clone" dentro do objeto protótipo
- O método clone pode gerar uma "*shallow*" ou "*deep*" *copy* do objeto protótipo
- Evita que o cliente conheça as classes que criam os objetos
- Use o padrão prototype quando precisa que seu código não dependa de classes

## Factory Method

### Intenção

- Definir uma interface para criar um objeto, mas deixar as subclasses decidirem que classe instanciar. O Factory Method permite adiar a instanciação para as subclasses.

### Conceitos

- Fábricas são simplesmente operações que criam objetos
- Oculta a lógica de instanciação do código cliente. O método fábrica será responsável por instanciar as classes desejadas
- É obtido através de herança. O método fábrica pode ser criado ou sobrescrito por subclasses
- Dá flexibilidade ao código cliente permitindo a criação de novas factories sem necessidade de alterar código já escrito (OCP)
- Use o Factory Method:
    - quando não souber com certeza quais os tipos de objetos o seu código vai precisar
    - Use o factory method para permitir a extensão de suas factories para criação de novos objetos (isso ujuda a aplicar o Open/Closed Principle)
    - para dar um hook (gancho) às subclasses para permitir que eleas decidam a lógica de criação de objetos
    - para eliminar duplicação de código na criação de objetos
- Ajuda na aplicação do Single Responsibility Principle. Separa o código que cria do código que usa o objeto
- Ajuda no desacoplamento do seu código

## Abstract Factory

### Intenção

- Fornecer uma interface para criação de famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.

### Conceitos

- É uma fábrica, assim como o Factory Method e geralmente é composto por múltiplos Factory Methods
- Visa agrupar famílias de produtos compatíveis criando uma fábrica concreta por grupo de objetos compatíveis
- Separa o código que cria do código que usa os objetos (SRP)
- Permite fácil implementação de novas famílias de objetos (OCP)
- Toda a programação fica focada nas interfaces e não em implementações
- Use o Factory Method:
    - um sistema deve ser independente de como seus produtos são criados, compostos ou representaos
    - um sistema deve ser configurado com uma família de produtos que podem (ou não) trabalhar juntos
    - uma família de objetos for projetada para ser usada em conjunto e você necessita garantir essa restrição
    - você quer fornecer uma biblioteca de classes de produtos e quer revelar somente suas interfaces, não suas implementações
- Os produtos sempre serão compatíveis entre si.

# Estruturais

- Se preocupam com a forma como os objetos são compostos para formar estruturas complexas.

## Composite

### Intenção

- Compor objetos em estruturas de árvore para representar hierarquias partes/todo. Composite permite aos clientes tratarem de maneira uniforme objetos individuais e composições de objetos

### Conceitos

- Faz mais sentido em estruturas que podem ser tratadas hierarquicamente (como árvores)
- Pode ser uma solução para estruturas complexas que podem ser tratadas de maneira uniforme
- Prioriza composição ao invés de herança
- Exemplo: produto solto com preço e caixa com vários do mesmo produto também com preço
- Use o padrão Composite quando:
    - suas estruturas de objetos possa ser representada hierarquicamente, como por exemplo, estruturas do tipo árvore
    - você quiser que o código cliente trate objetos compostos e objetos simples da mesma maneira
- Com ele, é muito fácil criar objetos complexos por composição, gerar uma hierarquia de objetos, usar polimorfismo e recursão e adicionar novos tipos de elementos na estruturas (OCP)

## Adapter

### Intenção

- Converter a interface de uma classe em outra interface esperada pelos clientes. O adapter permite que certas classes trabalhem em conjunto, pois de outra forma seria impossível por causa de suas interfaces incompatíveis.

### Conceitos

- Faz exatamente o que um adaptador da vida real faz (pense em um adaptador de tomadas de um formato para outro)
- É muito usado para definir limites dentro de camadas da aplicação
- Também pode ser usado para adaptar interfaces de código legado para um novo código
- Use o padrão Adapter quando:
    - você não quiser que seu código dependa diretamente do código de terceiros ou legado
    - você quiser usar uma classe existente mas sua interface for incompatível com a interface que seu código ou domínio precisam
    - você quiser reutilizar várias subclasses que não possuam determinada funcionalidade mas for impraticável estender o código de cada uma apenas para adicionar a funcionalidade desejada (o Decorator também faz isso)
- Desacopla o código da aplicação de códigos de terceiros
- Aplica o SRP ao separar a conversão de interfaces da lógica da aplicação
- Aplica o OCP ao permitir introduzir novos Adapters para código existente

## Bridge

### Intenção

- Bridge é um padrão de projeto estrutural que tem a intenção de desacoplar uma abstração da sua implementação, de modo que as duas possam variar e evoluir independentemente.
- Nesse sentido, para evitar confusões de nomenclaturas, definimos:
    - Abstração é um código de alto nível que geralmente delega ações para outro objeto
    - Implementação é o código que realmente faz o trabalho

### Conceitos

- O bridge foca o trabalho em composição, ou seja, ao invés de estender infinitamente minha estrutura de classes para todas as possíveis variantes por herança, posso apenas manter uma referência para uma implementação dentro da minha abstração. Isso me permite encaminhar chamadas de métodos da abstração para a implementação em tempo de execução.
- Use o padrão Bridge quando:
    - você souber que sua estrutura terá abstrações (código de alto nível) e implementações dessa abstração (detalhes) que possam variar de maneira independente
    - você souber que o Adapter poderia ser aplicado naquela estrutura (você já conhece a estrutura)
    - você quiser dividir uma classe que possa ter diversas variantes (como em produtos e suas variações de cores: CanetaAzul, CanetaVermelha, CamisetaAzul, CamisetaVermelha, etc...)
    - você quer trocar as implementações em tempo de execução
- Desacopla o código da abstração do código da implementação (SRP)
- Implementa o OCP ao permitir novas abstrações e/ou implementações para código
- Tem as mesmas vantagens do Adapter

## Decorator

### Intenção

- Agregar responsabilidade adicionais a um objeto dinamicamente. Os Decorators fornecem uma alternativa flexível ao uso de subclasses para extensão de funcionalidades.

### Conceitos

- Usa a composição ao invés da herança
- É muio parecido com o Composite porém tem a intenção diferente
- É usado para adicionar funcionalidades a objetos em tempo de execução
- Finge ser o objeto sendo decorado, porém repassa chamadas de métodos para o mesmo
- Pode executar ações antes e depois das chamadas dos métodos do objeto decorado
- Pode manipular dados antes do retorno
- Use o padrão Decorator quando:
    - você precisa adicionar funcionalidade em objetos sem quebrar ou alterar o código existente
    - você quiser usar composição ao invés de herança
    - você percebe que pode ocorrer uma explosão de subclasses em determinada estrutura
- É fácil adicionar ou remover comportamento de objetos sem tocar em código já escrito ou testado (OCP)
- É possível decorar um objeto já adicionando ainda mais funcionalidades (camadas)

## Façade

### Intenção

- Façade (Fachada) é um padrão de projeto estrutural que tem a intenção de fornecer uma interface unificada para um conjunto de interfaces em um subsistema. Façade define uma interface de nível mais alto que torna o subsistema mais fácil de ser usado

### Conceitos

- É importante ressaltar que o Façade não tem a intenção de ocultar nada do código cliente, a ideia é simplesmente facilitar o uso do sistema. O cliente ainda poderá usar os objetos do sistema diretamente se necessário.
- Como esse padrão visa unificar coisas que poderiam estar separadas no sistema, é muito comum que a própria classe de fachada se torne uma "*God Class*" **(uma classe faz tudo), isso quebra o SRP. Porém, ele também permite a criação de fachadas adicionais que podem ser usadas tanto por clientes quando por outras fachadas, o que ajuda a minimizar este problema.
- Use o padrão Façade quando:
    - você quer disponibilizar uma interface mais simples para um sistema complexo
    - você quer criar pontos de entrada para determinadas partes do sistema, como serviços externos, camadas da aplicação e objetos complexos dentro em determinadas partes do código
- Isola o código complexo do código cliente
- Facilita o uso do sistema
- Cria pontos de entrada para camadas da aplicação e serviços de terceiros

## Proxy

### Intenção

- Proxy é um padrão de projeto que tem a intenção de fornecer um substituto ou marcador de localização para outro objeto para controlar o acesso a esse objeto.

### Conceitos

- Usa composição, portanto tem a estrutura muito semelhante ao "Composite" e "Decorator" (as intenções são completamente diferentes)
- Usa um objeto "proxy" que finge ser o objeto real
- É usado para controle de acesso, logs, cache, lazy instantiation e lazy evaluation, distribuição de serviços e mais
- Pode escolher como e quando repassar chamadas de métodos para o objeto real
- Pode executar ações antes e depois das chamadas dos métodos do objeto real
- Tem várias variações: proxy virtual, proxy remoto, proxy de proteção, proxy inteligente...
    - **Proxy Virtual:** controla acesso a recursos que podem ser caros para criação ou utilização
    - **Proxy Remoto:** controla acesso a recursos que estão em servidores remotos
    - **Proxy de proteção:** controla acesso a recursos que possam necessitar autenticação ou permissão
    - **Proxy Inteligente:** além de controlar acesso ao objeto real, também executa tarefas adicionais para saber quando e como executar determinadas ações
- O código cliente nem precisa saber se está ou não usando um Proxy (ele finge ser o objeto real)
- Você pode adicionar novos Proxies sem mudar código já testado (OCP)
- O Proxy funciona mesmo se o objeto real não estiver operacional ou pronto para uso
- Você pode controlar o ciclo de vida de objetos reais dentro do proxy

## Flyweight

### Intenção

Flyweight é um padrão de projeto estrutural que tem a intenção de usar compartilhamento para suportar eficientemente grandes quantidades de objetos de forma granular

### Conceitos

- É um padrão de otimização
- Visa economizar memória RAM devido ao grande número de objetos na aplicação
- Resolve o problema de desempenho dividindo o estado de um objeto em "Intrínseco" e "extrínseco"
    - Estado intrínseco é o estado que geralmente não muda ou que muda muito pouco
    - Estado extrínseco é o estado que pode ser movido para fora do objeto por mudar frequentemente
- Só deve ser usado se sua aplicação estiver com problemas de alto consumo de memória RAM
- Só use o Flyweight se TODAS as condições as seguir forem verdadeiras:
    - sua aplicação utiliza uma grande quantidade de objetos
    - os custos de armazenamento são altos por causa da grande quantidade de objetos
    - a maioria dos estados de objetos podem se tornar extrínsecos
    - muitos objetos podem ser substituídos por poucos objetos compartilhados
    - a aplicação não depende da identidade dos objetos

# Comportamentais

- Os padrões de projeto comportamentais se preocupam com os algoritmos e a atribuição de responsabilidades entre objetos. Os padrões comportamentais não descrevem apenas padrões de objetos ou classes, mas também os padrões de comunicação entre eles. Esses padrões caracterizam fluxos de controle difíceis de seguir em tempo de execução. Eles afastam o foco do fluxo de controle para permitir que você se concentre somente na maneira como os objetos são interconectados.

## Strategy

- Os padrões de projeto comportamentais se preocupam com algoritmos, a distribuição de responsabilidade entre objetos e os padrões de comunicação entre eles

## Strategy

### Intenção

- Definir uma família de algoritmos, encapsular cada um deles e fazê-los intercambiáveis. O strategy permite que o algoritmo varie independentemente dos clientes que o utilizam.

### Conceitos

- Separa a regra de negócio de variações de algoritmos que possam existir
- Define uma família de algoritmos cada uma com uma variação diferente
- Usa composição para permitir a troca de algoritmos em tempo de execução
- Permite a criação de vários algoritmos sem a necessidade de condicionais
- Use o Strategy quando:
    - você tiver variantes de um mesmo algoritmo e precisa trocar esses algoritmos em tempo de execução
    - você precisar isolar a regra de negócio de algoritmo que deve ser aplicado (aplicando o princípio da responsabilidade única)
    - você perceber que está usando condicionais apenas para trocar o resultado final de um algoritmo
- Troca herança por composição
- Aplica os princípios do aberto/fechado e da responsabilidade única

## Command

### Intenção

- Encapsular uma solicitação como um objeto, desta forma permitindo que você parametrize clientes com diferentes solicitações, enfileire ou registre (log) solicitações e suporte operações que podem ser desfeitas

### Conceitos

- Transforma uma solicitação (um comando) em um objeto com toda a informação necessária para sua execução
- É a versão orientada a objetos para funções de callback
- Permite que comandos possam ser enfileirados, armazenados ou desfeitos
- Permite registro de alterações para que possam ser replicadas quando necessário
- Permite que você crie comandos compostos
- Desacopla o código do objeto que faz a solicitação com o objeto que recebe a solicitação
- Usa a composição ao invés de herança
- Use o command quando:
    - você quer desacoplar o objeto que envia a solicitação do objeto que a receberá
    - você quer tratar um comando como um objeto (com a possibilidade de armazenar, agendar, enfileirar, fazer log, agendar execuções, ou fazer qualquer coisa que pode ser feita com um objeto)
    - você quer permitir que solicitações possam ser feitas e desfeitas

## Memento

### Intenção

- Sem violar o encapsulamento, captura e externaliza um estado interno de um objeto, de modo que o mesmo possa posteriormente ser restaurado para este estado

### Conceitos

- Praticamente todas as aplicações o implementam com a função "desfazer" (CTRL-Z)
- Desacopla a responsabilidade da classe originadora de tomar conta dos seus backups
- Garante o encapsulamento e consistência nos backups
- Use o Memento quando:
    - você quer ter a possibilidade de salvar e restaurar o estado atual de um objeto sem violar o encapsulamento
    - você deseja implementar a função "desfazer" no seu sistema
    - você deseja fazer backups de estado de determinadas classes no seu sistema

## State

### Intenção

- Permite que um objeto altere seu comportamento quando seu estado interno muda. O objeto parecerá ter mudado sua classe

### Conceitos

- Evita condicionais quando um objeto contexto muda de comportamento dependendo do seu estado
- Desacopla o estado de um objeto contexto e seus métodos em objetos de estado separados
- Facilita a adição de novos estados sem a necessidade de alterar estados anteriores
- Use o State quando:
    - o seu objeto pode se comportar de maneira diferente dependendo do seu estado atual
    - você quer evitar o uso de condicionais que alteram o comportamento da classe de acordo com valores dos seus campos
- Desacopla a lógica de um eatdo da classe de contexto
- Permite a criação de novos estados apenas adicionando novas classes
- Elimina condicionais complexas da classe de contexto

## Mediator

### Intenção

- Define um objeto que encapsula como um conjunto de objetos interage. O mediator promove o acoplamento fraco ao evitar que os objetos se refiram explicitamente uns aos outros, permitindo que você varie suas interações

### Conceitos

- Visa encapsular a comunicação direta entre objetos
- Desacopla objetos que estariam intimamente ligados
- Centraliza toda a comunicação em apenas um objeto
- Use o Mediator quando:
    - você quer diminuir ou extinguir o acoplamento direto entre as classes que poderiam estar diretamente acopladas
    - você quer simplificar comunicações de muitos-para-muitos para comunicações um-para-muitos
- facilita a reutilização de objetos
- facilita a adição de novos mediadores e classes participantes na comunicação
- encapsula a comunicação entre objetos

## Chain of responsibility

### Intenção

- Evita o acoplamento do remetente de uma solicitação ao seu destinatário, dando a mais de um objeto a chance de tratar a solicitação. Encadeia os objetos receptores e passa a solicitação ao longo da cadeia até que um objeto a trate

### Conceitos

- É usado quando uma requisição precisa passar por uma sequência de operações até ser totalmente tratada
- Desacopla quem envia de quem vai tratar a requisição
- É muito usado com requisições HTTP
- É a base para outros padrões de projeto conhecidos (como Middleware usado no express)
- Permite que um objeto **TRATE** a requisição e chame o **PRÓXIMO** objeto da cadeia
- Permite que um objeto **NÃO TRATE** a requisição e chame o **PRÓXIMO** objeto da cadeia
- Permite que um objeto **TRATE** a requisição e **FINALIZE** objeto da cadeia
- Permite que um objeto **NÃO TRATE** a requisição e **FINALIZE** objeto da cadeia
- O cliente pode iniciar a requisição de qualquer objeto caso necessário
- Use o Chain of responsibility quando:
    - seu sistema precisa processar uma requisição em várias etapas diferentes e você não quer criar uma ordem rígida para o processamento. O chain of responsibility permite que você altere a ordem dos objetos na cadeia facilmente (mesmo assim, mantendo uma ordem específica)
    - você quer aplicar o princípio da responsabilidade única para tratamento de dados da requisição. Cada objeto fica responsável por tratar apenas que lhe couber
    - você quer permitir que os objetos responsáveis pelo tratamento de uma requisição possam variar em tempo de execução
    - Aplica o princípio da responsabilidade única (SRP)
    - Aplica o princípio do aberto e fechado (OCP)
    - Permite que você altere a cadeia de objetos e a ordem das chamadas facilmente

## Template

### Intenção

- Define o esqueleto de um algoritmo em uma operação, postergando a definição de alguns passos para subclasses. O template method permite que as subclasses redefinam certos passos de um algoritmo sem mudar sua estrutura.

### Conceitos

- Mantém a ordem de chamada de métodos no algoritmo
- Evita a duplicação de código dentro da classe base
- Substitui condicionais por polimorfismo
- Permite que as subclasses alterem apenas os passos necessários para concluir o algoritmo
- Permite a adição de hooks para que as subclasses utilizem em pontos estratégicos do algoritmo
- Use o Template Method quando:
    - você precisa de variações de um mesmo algoritmo sem mudar a ordem de execução dos métodos
    - você percebe que está usando herança para alterar apenas pequenos trechos de código de um algoritmo
- Evita duplicação de código
- Permite fácil alteração de algoritmo
- Aplica o OCP e SRP

## Observer

### Intenção

- Define uma dependência um para muitos entre objetos, de modo que, quando um objeto muda de estado, todos os seus dependentes são automaticamente notificados e atualizados

### Conceitos

- Implementado com dois tipos de objetos: objetos observáveis (Observable) e objetos observadores (Observer)
- Objetos observáveis (Observable) têm uma referência para todos os seus observadores. Isso torna possível adicionar remover e notificar todos os observadores quando seu estado muda
- Objetos observadores (Observer) devem ter meios de receber notificações de seus observáveis. Geralmente isso é feito com apenas um método
- Use o observer quando você precisa notificar vários objetos sobre a mudança de estado de outro(s) objeto(s)
- Usa o SRP e OCP
- Facilita a comunicação entre objetos em tempo de execução

## Iterator

### Intenção

- Fornece uma maneira de acessar sequencialmente os elementos de um objeto agregado sem expor sua representação subjacente

### Conceitos

- Desacopla a intenção principal do objeto do modo como a sua iteração é realizada (delega a iteração para outro objeto)
- Permite vários tipos de iterators, facilitando a implementação de de novos modos de travessia na mesma coleção
- Encapsula os detalhes e monitora toda a travessia
- Permite que a coleção troque de iterator em tempo de execução
- Geralmente a linguagem de programação disponibiliza maneiras para trabalhar com iteradores
- Use o Iterator quando:
    - você precisa remover a complexidade de travessia de dentro da coleção principal. Isso permite que sua coleção foque apenas em armazenar dados de maneira eficiente
    - sua coleção pode ter vários modos de travessia, como crescente, decrescente, pelo menor número de saltos, pulando de dois em dois, ou como preferir
    - você quer disponibilizar protocolos de travessia para diferentes tipos de coleções
- É possível pausar a travessia e continuar posteriormente
- É possível atravessar várias vezes a mesma coleção em paralelo usando outro objeto Iterador
- É fácil adicionar novos objetos iteradores com algoritmos de travessia completamente diferentes
- Não polui o código do objeto principal com vários métodos e algoritmos de travessia diferentes

## Visitor

### Intenção

- Representa uma operação a ser executada sobre os elementos da estrutura de um objeto. O visitor permite que você separe um algoritmo dos elementos sobre os quais opera.

### Conceitos

- Use o Visitor quando:
    - você precisa executar um algoritmo em todos os elementos de uma estrutura mais complexa (como uma estrutura criada com o padrão Composite)
    - você quer separar uma lógica complexa em objetos auxiliares
- Limpa o código da regra de negócio
- Separa algoritmos complexos em objetos auxiliares
- Aplica SRP e OCP
