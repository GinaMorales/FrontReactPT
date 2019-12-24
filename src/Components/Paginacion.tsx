import React from 'react';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";


export default class Paginacion extends React.Component<Props> {

    state = {
        pager: {},
        totalItems: 0
    }
    
    constructor(props: any) {
        super(props);
        this.state = { pager: {}, totalItems: this.props.homes.length };
    }

    componentWillMount() {
        if (this.props.homes && this.props.homes.length) {
            this.setPage(this.props.currentPage);
        }
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        if (this.props.homes !== prevProps.homes) {
            this.setPage(this.props.currentPage);
        }
    }

    setPage(_pagina: any) {
        let items = this.props.homes;
        let pager: any = this.state.pager;

        if (_pagina < 1 || _pagina > _pagina.totalPages) {
            return;
        }

        pager = this.getPager(items.length, _pagina);

        let pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

        this.setState({ pager: pager });

        this.props.onChangePage(pageOfItems);
    }

    getPager(_totalItems: any, _currentPage: any, _pageSize?: any) {
        _currentPage = _currentPage || 1;

        _pageSize = _pageSize || this.props.todosPerPage;

        let totalPages = Math.ceil(_totalItems / _pageSize);

        let startPage = 0, endPage = 0;

        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        } else {

            if (_currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (_currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = _currentPage - 5;
                endPage = _currentPage + 4;
            }
        }

        let startIndex = (_currentPage - 1) * _pageSize;
        let endIndex = Math.min(startIndex + _pageSize - 1, _totalItems - 1);

        let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

        return {
            totalItems: _totalItems,
            currentPage: _currentPage,
            pageSize: _pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    render() {
        let pager: any = this.state.pager;

        if (!pager.pages || pager.pages.length <= 1) {
            return null;
        }

        return (
            <ul className="pagination">
                <li className={pager.currentPage === 1 ? 'd-none' : ''}>
                    <a className="text-muted" onClick={() => this.setPage(pager.currentPage - 1)}><FaAngleLeft></FaAngleLeft></a>
                </li>
                <li className="page-item">{pager.startIndex + 1} a {pager.endIndex + 1} de {pager.totalItems}</li>
                <li className={pager.currentPage === pager.totalPages ? 'd-none' : ''}>
                    <a className="text-muted" onClick={() => this.setPage(pager.currentPage + 1)}><FaAngleRight></FaAngleRight></a>
                </li>
            </ul>
        );
    }
}

export type Props = {
    homes: any,
    currentPage: number,
    todosPerPage: number,
    onChangePage: Function
}