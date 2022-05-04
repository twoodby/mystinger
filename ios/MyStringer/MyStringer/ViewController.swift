//
//  ViewController.swift
//  MyStringer
//
//  Created by Timothy Woodby on 5/3/22.
//

import UIKit
import Stringer

class ViewController: UIViewController {
    
    
    @IBOutlet weak var txtInputValue: UITextField!
    @IBOutlet weak var lblCurrentValue: UILabel!
    @IBOutlet weak var lblOutputValue: UILabel!
    
    
    private var s: StringerMyStringer = StringerNewMyStringer("", nil)!
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    
    @IBAction func btnLoasStringClick(_ sender: Any) {
        lblCurrentValue.text = txtInputValue.text
        s = StringerNewMyStringer(txtInputValue.text,nil)!
    }
    
    
    @IBAction func btnFlipTextClick(_ sender: Any) {
        lblOutputValue.text = s.flipValue()
    }
    
    @IBAction func btnCrazyCamelClick(_ sender: Any) {
        lblOutputValue.text = s.crazyCamel()
    }
}


