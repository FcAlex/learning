import { Route, Switch } from 'react-router'
import './Content.css'
import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param'
import NotFound from '../../views/examples/NotFound'

const Content = props => {
    return (
        <main className="Content">
            <Switch> {/* representa  switch normalmente */}
                <Route exact path="/"> {/* Só entra se for o path exato.
                                         Sem o exact, sempre cairá nesse caso, uma vez que
                                        todos possui o / e ele funciona incrementando o path*/}
                    <Home />
                </Route>

                <Route path="/about">
                    <About />
                </Route>

                <Route path="/param/:id"> {/* representa um parametro */}
                    <Param />
                </Route>

                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </main>
    )
}

export default Content