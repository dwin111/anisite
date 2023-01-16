import { useContext } from 'react';
import { CreateProduct } from '../components/CreateProduct';
import { ErrorMessage } from '../components/ErrorMessage';
import { Loader } from '../components/Loader';
import { Modal } from '../components/Modal';
import { Product } from '../components/Product';
import { ModalContext } from '../context/Modalcontext';
import { useProducts } from '../hooks/products';
import { IProduct } from '../models';
import { FilmPage } from '../components/FilmPage';
import { Shearch } from '../components/Shearch';
import { TagButton } from '../components/TagButton';
import { Link } from 'react-router-dom';

export function ProductPage(){
  const {loading,error,products, AddProduct} = useProducts();
  const {modal, open, close} = useContext(ModalContext)

  function createHandler(product: IProduct): void {
    close();
    AddProduct(product);
  }



  return (
   <div className="grid gap-4 grid-cols-2">
      <div className="container mx-auto max-w-2xl pt-5 ">
      
        {loading && <Loader/>}
        {error && <ErrorMessage error={error} />}

        
       {!loading && <div className="inline-block align-middle"><Shearch/></div>}
        
        <div className="felx">{products.map(product => <Link to={`/view/${product.id}`}><Product product={product} key={product.id}/></Link>)}</div>

        {modal && <Modal title="Create new product" onClose={close}>
          <CreateProduct onCreate={createHandler}/>
        </Modal>}
        <button className="fixed bottom-5 rigght-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2" onClick={open}>+</button>
      </div>
      
      <div className="container mx-auto max-w-2xl pt-5">
      
        {loading && <Loader/>}
        {error && <ErrorMessage error={error} />}
        

        <div>
          {!loading && <div className="mb-3"><TagButton/> </div>}
          <div className="bg-[#373737] w-full h-[3px] mb-3"></div>
          <div className="grid gap-4 grid-cols-4">{products.map(product =><Link to={`/view/${product.id}`}> <FilmPage product={product} key={product.id}/></Link>)}</div>
        </div>



      </div>
  </div>
   
 )
}