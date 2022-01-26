
export const UserDetail = ({user}) => {
    return (
        <div className='row2'>
                <div className='content'>
                    <div className='blockHeader'>
                        <h2>{user.name}</h2>
                    </div>
                    <div className='BlockInfo'>
                        <h3>{user.title}</h3>
                        <hr style={{color:'#fff',border:'1px solid #fff'}}/>
                        <div className='BlockInfoList'>
                            {user.notes}
                        </div>
                    </div>
                </div>
        </div>
    )
}