import React from "react";
import {Link} from "react-router-dom";
class BankTable extends React.Component {
    render() {
      const { bank, handleDelete } = this.props;
      return (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>BankId</th>
                <th>BankName</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {bank.map((s) => (
                <tr key={s.bankId}>
                  <td>{s.bankId}</td>
                  <td>{s.bankName}</td>
                  <td>{s.login.bankId}</td>
                  <td>{s.address}</td>
                  
                  <td>
                    <Link
                      to={`/bank/update/${s.bankId}`}
                      className="btn btn-primary"
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(s.bankId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
  
  export default BankTable;