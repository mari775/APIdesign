import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;
    
    h1 {
        text-align: center;
        margin: 4rem 0;
    }
    
    h2 {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 1rem 0 0.5rem 0;
        text-align: center;
    }
`;

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
`;

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    
    img {
        width: 180px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }
    
    span {
        font-weight: bold;
        font-size: 120%;
        text-align: center;
    }
    
    a {
        transition: all 0.3s;
    }
    
    a:hover {
        transform: scale(1.1);
    }
`;

export const Btn = styled.button`
    margin-top: 5px;
    padding: 0.7rem 3rem;
    border: none;
    border-radius: 15px;
    color: #212121;
    background-color: #ffffff;
    font-weight: 1000;
    font-size: 12px;
    cursor: pointer;
    transition: all 250ms;
    
    &:hover {
        background-color: #f0f0f0;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    }
`;

export const FilterContainer = styled.div`
    margin-bottom: 2rem;
`;

export const FilterHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
    gap: 1rem;
    
    h2 {
        margin: 0;
        color: #212121;
        text-align: center;
    }
`;

export const ClearFilters = styled.button`
    background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    box-shadow: 0 3px 10px rgba(220, 53, 69, 0.3);
    transition: all 0.3s ease;
    
    &:hover {
        background: linear-gradient(135deg, #c82333 0%, #a71e2a 100%);
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(220, 53, 69, 0.4);
    }
    
    &:active {
        transform: translateY(0);
    }
`;

export const GenreFilter = styled.div`
    margin-bottom: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.8rem;
    
    label {
        background: linear-gradient(135deg, rgb(237, 218, 255) 0%, rgb(220, 190, 255) 100%);
        color: #212121;
        padding: 0.8rem 1.4rem;
        border-radius: 25px;
        border: 2px solid transparent;
        cursor: pointer;
        user-select: none;
        font-size: 1rem;
        font-weight: 600;
        box-shadow: 0 3px 10px rgba(0,0,0,0.08);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        
        input {
            margin-right: 0.8rem;
            cursor: pointer;
            accent-color: #7c3aed;
            width: 18px;
            height: 18px;
            vertical-align: middle;
        }
        
        span {
            font-weight: 600;
            font-size: 0.95rem;
        }
        
        &:hover {
            background: linear-gradient(135deg, rgb(174, 130, 255) 0%, rgb(147, 97, 255) 100%);
            border-color: #7c3aed;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(124, 58, 237, 0.25);
        }
        
        &:has(input:checked) {
            background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
            color: white;
            border-color: #5b21b6;
            box-shadow: 0 6px 20px rgba(124, 58, 237, 0.4);
            
            input {
                accent-color: white;
            }
        }
        
        &:active {
            transform: translateY(0);
        }
    }
`;

export const FilterInfo = styled.div`
    margin-top: 1rem;
    padding: 1rem;
    background: rgba(124, 58, 237, 0.1);
    border-radius: 10px;
    border-left: 4px solid #7c3aed;
    
    small {
        color: #6d28d9;
        font-weight: 500;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        
        &::before {
            content: "🎬";
            font-size: 1.2rem;
        }
    }
`;

export const LoadingContainer = styled.div`
    text-align: center;
    padding: 3rem;
    
    p {
        font-size: 1.2rem;
        color: #666;
        margin: 0;
        
        &::after {
            content: "";
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid #7c3aed;
            border-radius: 50%;
            border-top-color: transparent;
            animation: spin 1s linear infinite;
            margin-left: 10px;
            vertical-align: middle;
        }
    }
    
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;

export const NoResults = styled.div`
    text-align: center;
    padding: 3rem;
    color: #666;
    
    p {
        font-size: 1.2rem;
        margin: 0;
        
        &::before {
            content: "🎭";
            font-size: 2rem;
            display: block;
            margin-bottom: 1rem;
        }
    }
`;