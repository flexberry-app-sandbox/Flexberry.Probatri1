﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Probatri
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Форма рег входа.
    /// </summary>
    // *** Start programmer edit section *** (ФормаРегВхода CustomAttributes)

    // *** End programmer edit section *** (ФормаРегВхода CustomAttributes)
    [AutoAltered()]
    [Caption("Форма рег входа")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ФормаРегВходаE", new string[] {
            "Дата as \'Дата\'",
            "Комната as \'Комната\'",
            "Комната.Номер as \'Номер\'"}, Hidden=new string[] {
            "Комната.Номер"})]
    [AssociatedDetailViewAttribute("ФормаРегВходаE", "ТЧРегВхСотр", "ТЧРегВхСотрE", true, "", "Т ч рег вх сотр", true, new string[] {
            ""})]
    [AssociatedDetailViewAttribute("ФормаРегВходаE", "ТЧРегВхГост", "ТЧРегВхГостE", true, "", "Т ч рег вх гост", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("ФормаРегВходаE", "Комната", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Номер")]
    [View("ФормаРегВходаL", new string[] {
            "Дата as \'Дата\'",
            "Комната.Номер as \'Номер\'"})]
    public class ФормаРегВхода : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДата;
        
        private IIS.Probatri.Комната fКомната;
        
        private IIS.Probatri.DetailArrayOfТЧРегВхГост fТЧРегВхГост;
        
        private IIS.Probatri.DetailArrayOfТЧРегВхСот fТЧРегВхСот;
        
        private IIS.Probatri.DetailArrayOfТЧРегВхСотр fТЧРегВхСотр;
        
        // *** Start programmer edit section *** (ФормаРегВхода CustomMembers)

        // *** End programmer edit section *** (ФормаРегВхода CustomMembers)

        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (ФормаРегВхода.Дата CustomAttributes)

        // *** End programmer edit section *** (ФормаРегВхода.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (ФормаРегВхода.Дата Get start)

                // *** End programmer edit section *** (ФормаРегВхода.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (ФормаРегВхода.Дата Get end)

                // *** End programmer edit section *** (ФормаРегВхода.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормаРегВхода.Дата Set start)

                // *** End programmer edit section *** (ФормаРегВхода.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (ФормаРегВхода.Дата Set end)

                // *** End programmer edit section *** (ФормаРегВхода.Дата Set end)
            }
        }
        
        /// <summary>
        /// Форма рег входа.
        /// </summary>
        // *** Start programmer edit section *** (ФормаРегВхода.Комната CustomAttributes)

        // *** End programmer edit section *** (ФормаРегВхода.Комната CustomAttributes)
        [PropertyStorage(new string[] {
                "Комната"})]
        [NotNull()]
        public virtual IIS.Probatri.Комната Комната
        {
            get
            {
                // *** Start programmer edit section *** (ФормаРегВхода.Комната Get start)

                // *** End programmer edit section *** (ФормаРегВхода.Комната Get start)
                IIS.Probatri.Комната result = this.fКомната;
                // *** Start programmer edit section *** (ФормаРегВхода.Комната Get end)

                // *** End programmer edit section *** (ФормаРегВхода.Комната Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормаРегВхода.Комната Set start)

                // *** End programmer edit section *** (ФормаРегВхода.Комната Set start)
                this.fКомната = value;
                // *** Start programmer edit section *** (ФормаРегВхода.Комната Set end)

                // *** End programmer edit section *** (ФормаРегВхода.Комната Set end)
            }
        }
        
        /// <summary>
        /// Форма рег входа.
        /// </summary>
        // *** Start programmer edit section *** (ФормаРегВхода.ТЧРегВхГост CustomAttributes)

        // *** End programmer edit section *** (ФормаРегВхода.ТЧРегВхГост CustomAttributes)
        public virtual IIS.Probatri.DetailArrayOfТЧРегВхГост ТЧРегВхГост
        {
            get
            {
                // *** Start programmer edit section *** (ФормаРегВхода.ТЧРегВхГост Get start)

                // *** End programmer edit section *** (ФормаРегВхода.ТЧРегВхГост Get start)
                if ((this.fТЧРегВхГост == null))
                {
                    this.fТЧРегВхГост = new IIS.Probatri.DetailArrayOfТЧРегВхГост(this);
                }
                IIS.Probatri.DetailArrayOfТЧРегВхГост result = this.fТЧРегВхГост;
                // *** Start programmer edit section *** (ФормаРегВхода.ТЧРегВхГост Get end)

                // *** End programmer edit section *** (ФормаРегВхода.ТЧРегВхГост Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормаРегВхода.ТЧРегВхГост Set start)

                // *** End programmer edit section *** (ФормаРегВхода.ТЧРегВхГост Set start)
                this.fТЧРегВхГост = value;
                // *** Start programmer edit section *** (ФормаРегВхода.ТЧРегВхГост Set end)

                // *** End programmer edit section *** (ФормаРегВхода.ТЧРегВхГост Set end)
            }
        }
        
        /// <summary>
        /// Форма рег входа.
        /// </summary>
        // *** Start programmer edit section *** (ФормаРегВхода.ТЧРегВхСот CustomAttributes)

        // *** End programmer edit section *** (ФормаРегВхода.ТЧРегВхСот CustomAttributes)
        public virtual IIS.Probatri.DetailArrayOfТЧРегВхСот ТЧРегВхСот
        {
            get
            {
                // *** Start programmer edit section *** (ФормаРегВхода.ТЧРегВхСот Get start)

                // *** End programmer edit section *** (ФормаРегВхода.ТЧРегВхСот Get start)
                if ((this.fТЧРегВхСот == null))
                {
                    this.fТЧРегВхСот = new IIS.Probatri.DetailArrayOfТЧРегВхСот(this);
                }
                IIS.Probatri.DetailArrayOfТЧРегВхСот result = this.fТЧРегВхСот;
                // *** Start programmer edit section *** (ФормаРегВхода.ТЧРегВхСот Get end)

                // *** End programmer edit section *** (ФормаРегВхода.ТЧРегВхСот Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормаРегВхода.ТЧРегВхСот Set start)

                // *** End programmer edit section *** (ФормаРегВхода.ТЧРегВхСот Set start)
                this.fТЧРегВхСот = value;
                // *** Start programmer edit section *** (ФормаРегВхода.ТЧРегВхСот Set end)

                // *** End programmer edit section *** (ФормаРегВхода.ТЧРегВхСот Set end)
            }
        }
        
        /// <summary>
        /// Форма рег входа.
        /// </summary>
        // *** Start programmer edit section *** (ФормаРегВхода.ТЧРегВхСотр CustomAttributes)

        // *** End programmer edit section *** (ФормаРегВхода.ТЧРегВхСотр CustomAttributes)
        public virtual IIS.Probatri.DetailArrayOfТЧРегВхСотр ТЧРегВхСотр
        {
            get
            {
                // *** Start programmer edit section *** (ФормаРегВхода.ТЧРегВхСотр Get start)

                // *** End programmer edit section *** (ФормаРегВхода.ТЧРегВхСотр Get start)
                if ((this.fТЧРегВхСотр == null))
                {
                    this.fТЧРегВхСотр = new IIS.Probatri.DetailArrayOfТЧРегВхСотр(this);
                }
                IIS.Probatri.DetailArrayOfТЧРегВхСотр result = this.fТЧРегВхСотр;
                // *** Start programmer edit section *** (ФормаРегВхода.ТЧРегВхСотр Get end)

                // *** End programmer edit section *** (ФормаРегВхода.ТЧРегВхСотр Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормаРегВхода.ТЧРегВхСотр Set start)

                // *** End programmer edit section *** (ФормаРегВхода.ТЧРегВхСотр Set start)
                this.fТЧРегВхСотр = value;
                // *** Start programmer edit section *** (ФормаРегВхода.ТЧРегВхСотр Set end)

                // *** End programmer edit section *** (ФормаРегВхода.ТЧРегВхСотр Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ФормаРегВходаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ФормаРегВходаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ФормаРегВходаE", typeof(IIS.Probatri.ФормаРегВхода));
                }
            }
            
            /// <summary>
            /// "ФормаРегВходаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ФормаРегВходаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ФормаРегВходаL", typeof(IIS.Probatri.ФормаРегВхода));
                }
            }
        }
    }
}
