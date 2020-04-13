import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { generatePalette } from './colorHelper';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Page from './components/Page.jsx';
import PaletteList from './container/PaletteList.jsx';
import Palette from './container/Palette.jsx';
import SingleColorPalette from './container/SingleColorPalette.jsx';
import NewPaletteForm from './container/NewPaletteForm.jsx';

export default class Routes extends Component {
    render() {
        const { palettes, newPalette, deletePalette, importPalette } = this.props;
        function findPalettebyId(id) {
            return generatePalette(palettes.find(p => p.id === id));
        }
        return (
            <Route
                
                render={({location}) => (
                    <TransitionGroup>
                        <CSSTransition key={location.key} classNames="page" timeout={500}>
                            <Switch location={location}>
                                <Route
                                    exact
                                    path="/"
                                    render={(routeProps) => (
                                        <Page>
                                            <PaletteList
                                                palettes={palettes} 
                                                {...routeProps} 
                                                deletePalette={deletePalette} 
                                                importPalette={importPalette} 
                                            />
                                        </Page>
                                    )}
                                />
                                <Route
                                    exact
                                    path="/palette/new"
                                    render={(routeProps) => (
                                        <Page>
                                            <NewPaletteForm {...routeProps} newPalette={newPalette} palettes={palettes} />
                                        </Page>
                                    )}
                                />
                                <Route
                                    exact
                                    path="/palette/:id"
                                    render={(routeProps) => (
                                        <Page>
                                            <Palette {...routeProps} palette={findPalettebyId(routeProps.match.params.id)} />
                                        </Page>
                                        )}
                                />
                                <Route
                                    exact
                                    path="/palette/:paletteId/:colorId"
                                    render={(routeProps) => (
                                        <Page>
                                            <SingleColorPalette 
                                                palette={findPalettebyId(routeProps.match.params.paletteId)} 
                                                colorId={routeProps.match.params.colorId} 
                                            />
                                        </Page>
                                    )}
                                />
                                <Route
                                    render={(routeProps) => (
                                        <Page>
                                            <PaletteList
                                                palettes={palettes} 
                                                {...routeProps} 
                                                deletePalette={deletePalette} 
                                                importPalette={importPalette} 
                                            />
                                        </Page>
                                    )}
                                />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )}
            />
        )
    }
}
