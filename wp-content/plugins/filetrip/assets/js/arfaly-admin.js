function arfaly_dropbox_get_folder_list(e){jQuery(".arfaly-dp-folder-loading").addClass("is-active"),jQuery.ajax({url:arfaly_object.ajax_url,type:"POST",data:{action:"get_dropbox_folder_list",path:e,page:arfaly_object.page},success:function(e){jQuery("#arfaly_dropbox_folder_content").html(e),jQuery(".arfaly-dp-folder-loading").removeClass("is-active")}})}function arfaly_ftp_get_folder_list(e){jQuery(".arfaly-ftp-folder-loading").addClass("is-active"),jQuery.ajax({url:arfaly_object.ajax_url,type:"POST",data:{action:"get_ftp_folder_list",path:e,page:arfaly_object.page},success:function(e){jQuery("#arfaly_ftp_folder_content").html(e),jQuery(".arfaly-ftp-folder-loading").removeClass("is-active")}})}function arfaly_drive_get_folder_list(e){jQuery(".arfaly-drive-folder-loading").addClass("is-active"),jQuery.ajax({url:arfaly_object.ajax_url,type:"POST",data:{action:"get_drive_folder_list",path:e,page:arfaly_object.page},success:function(e){jQuery("#arfaly_drive_folder_content").html(e),jQuery(".arfaly-drive-folder-loading").removeClass("is-active")}})}function arfaly_immediate_backup(){jQuery(".arfaly-drive-folder-loading").addClass("is-active"),jQuery.ajax({url:arfaly_object.ajax_url,type:"POST",data:{action:"immediate_backup",page:arfaly_object.page},success:function(e){jQuery("#filetrip_backup_result").html(e),jQuery(".arfaly-drive-folder-loading").removeClass("is-active"),window.setTimeout(filetrip_refresh_page,500)},error:function(e){jQuery(".arfaly-drive-folder-loading").removeClass("is-active")}})}function filetrip_refresh_page(){location.reload()}function arfaly_update_dropbox_folder(e,a){return jQuery("#"+a).val(e),self.parent.tb_remove(),!1}function arfaly_update_drive_folder(e,a){return jQuery("#"+a).val(e),self.parent.tb_remove(),!1}function clear_dropbox_folder_selection(e){jQuery("#"+e).val("")}function clear_drive_folder_selection(e){jQuery("#"+e).val("")}function ToggleScheduleFields(e){e="undefined"!=typeof e?e:"manually";var a=jQuery(".recurring-setting"),r=jQuery("#schedule-start"),t=jQuery("p.twice-js");switch(e){case"manually":a.closest("tr").fadeOut();break;case"filetrip_bkp_hourly":case"filetrip_bkp_daily":a.closest("tr").fadeOut(),r.closest("tr").fadeIn(),t.hide();break;case"filetrip_bkp_twicedaily":a.closest("tr").fadeOut(),r.closest("tr").fadeIn(),t.fadeIn();break;case"filetrip_bkp_weekly":case"filetrip_bkp_fortnightly":a.closest("tr").fadeOut(),jQuery(".start-day").closest("tr").fadeIn(),r.closest("tr").fadeIn(),t.fadeOut();break;case"filetrip_bkp_monthly":a.closest("tr").fadeOut(),r.closest("tr").fadeIn(),jQuery("#start-date").closest("tr").fadeIn(),t.fadeOut()}}jQuery.noConflict(),jQuery(document).ready(function(e){e.ajaxSetup({cache:!1}),e("select#filetrip_backup_setting\\[schedule_recurrence_type\\]").size()&&(ToggleScheduleFields(e("select#filetrip_backup_setting\\[schedule_recurrence_type\\]").val()),e(document).on("change","select#filetrip_backup_setting\\[schedule_recurrence_type\\]",function(){ToggleScheduleFields(e(this).val())}))});